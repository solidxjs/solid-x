/* eslint-disable @typescript-eslint/no-explicit-any */
import { VFile } from '@mdx-js/mdx/lib/compile';
import Slugger from 'github-slugger';
import { Root } from 'remark-gfm';
import { toString } from 'mdast-util-to-string';

const captalize = (str: string) =>
  str
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');

export default function remarkStructurizeData({ output }: { output: Record<string, unknown> }) {
  const slugger = new Slugger();
  const cache = new Map<string, string>();
  let activeSlug = '';
  let content = '';

  const walk = (node: Root | Root['children'][number]) => {
    const isHeading = node.type === 'heading';
    let heading = '';

    if ('children' in node) {
      // if there are children in this node, get the result from the waling down the children
      for (const child of node.children) {
        heading += walk(child);
      }
    } else if (!isHeading) {
      // otherwise simply get the text value of the node and store for both heading result and
      // content
      // skip adding content if it is a heading as it is collected separately.
      content += toString(node) + '\n';
    }

    if (isHeading && node.depth > 1) {
      heading = toString(node);
      // If we have been collecting content for the previous heading, store the
      // content gathered so far under the active slug now that we have reached the next heading.
      cache.set(activeSlug, content);
      // reset content and point the active slug to the current heading
      content = '';
      activeSlug = slugger.slug(heading) + '#' + heading;
    }

    return heading;
  };

  return (tree: Root, file: VFile) => {
    walk(tree);
    cache.set(activeSlug, content);

    const path = file.path.match(/.*content(.*)\.\w+$/i)?.[1] ?? '';
    const filename = (file.basename ?? '').replace(/[-_]/g, ' ').replace(/\.\w+$/, '');
    output[path] = {
      title: captalize(filename),
      data: Object.fromEntries(cache),
    };
    cache.clear();
    activeSlug = '';
    content = '';

    return tree;
  };
}
