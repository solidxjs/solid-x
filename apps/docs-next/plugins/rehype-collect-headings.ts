// TODO: Add types in the future
/* eslint-disable @typescript-eslint/no-explicit-any */
import GithubSlugger from 'github-slugger';
import { visit } from 'unist-util-visit';
import { jsToTreeNode } from './utils';

const HEADING_REGEX = /h([0-6])/;
const RAW_NODE_TYPES = ['text', 'raw', 'mdxTextExpression'];
const HEADINGS_META_KEY = '__mdxDocHeadings';

type HeadingMeta = {
  depth: number;
  slug: string;
  text: string;
};
type Options = {
  cache?: Map<string, HeadingMeta[]>
};

/**
 * A custom plugin to inject a function in the file that retrieves the stored
 * heading metadata from the file data.
 * @returns A custom rehype plugin
 */
export function rehypeCollectHeadings() {
  return function (tree: any, file: any) {
    const headings = file.data[HEADINGS_META_KEY] ?? [];
    tree.children.unshift(
      jsToTreeNode(`export function getHeadings() { return ${JSON.stringify(headings)}; }`)
    );
  };
};

/**
 * A custom plugin to add slugged IDs to the headings in the page and store the metadata in the
 * file data.
 * @returns A custom rehype plugin
 */
export function rehypeHeadingIds({ cache }: Options = {}) {
  const slugger = new GithubSlugger();
  return function (tree: any, file: any) {
    const headings: any[] = [];
    visit(tree, node => {
      // Process only the `h` elements and ignore the rest
      if (
        node.type !== 'element' ||
        !HEADING_REGEX.test(node.tagName)
      ) return;
      
      // get the heading level
      const [_, level] = node.tagName.match(HEADING_REGEX) ?? [];
      const depth = Number.parseInt(level);
      
      // collect the text of the heading for slugging it for ID
      let text = '';
      visit(node, (child, _, parent) => {
        // we only want attached children
        if (parent == null) return;
        
        // we only want the child that is a text expression
        if (RAW_NODE_TYPES.includes(child.type)) {
          text += child.value;
        }
      });
      
      // set the id of the heading
      node.properties ||= {};
      // set the id only if it is not set already
      node.properties.id ||= slugger.slug(text);
      
      // store the heading
      headings.push({ depth, slug: node.properties.id, text });
    });
    
    // store the headings in the file data
    file.data[HEADINGS_META_KEY] = headings;
    // also store the headings in the provided cache if available
    cache?.set(file.path, headings);
  };
};
