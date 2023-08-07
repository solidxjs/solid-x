import { VFile } from '@mdx-js/mdx/lib/compile';
import Slugger from 'github-slugger';
import { Root } from 'remark-gfm';

const captalize = (str: string) => str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
const cleanup = (content: string) => content.trim().split('\n').filter(Boolean).map(l => l?.trim()).join('\n');

export default function remarkStructurizeData({ output }: { output: Record<string, any> }) {
  const slugger = new Slugger();
  const cache = new Map<string, string>();
  let activeSlug = '';
  let content = '';
  let skip = false;

  const walk = (node: Root | Root['children'][number]) => {
    let result = '';
    const { type } = node;
    
    if (type === 'heading') {
      skip = true;
    }
    if (
      ['code', 'table', 'blockquote', 'list', 'mdxJsxFlowElement'].includes(
        type
      )
    ) {
      result += '\n';
      if (!skip) content += '\n';
    }

    if ('children' in node) {
      for (const child of node.children) {
        result += walk(child);
      }
    } else if (
      ['code', 'text', 'inlineCode', 'tableCell'].includes(node.type)
    ) {
      result += (node as any).value;
      if (!skip) content += (node as any).value;
    }
    
    if (
      [
        'code',
        'table',
        'blockquote',
        'list',
        'listItem',
        'break',
        'mdxJsxFlowElement'
      ].includes(type)
    ) {
      result += '\n';
      if (!skip) content += '\n';
    }
    if (type === 'tableCell') {
      result += '\t';
      if (!skip) content += '\t';
    }
    
    if (type === 'heading') {
      skip = false;
    }

    if (type === 'heading' && node.depth > 1) {
      cache.set(activeSlug, cleanup(content));
      content = '';
      activeSlug = slugger.slug(result) + '#' + result;
    }

    return result;
  };
  
  return (tree: Root, file: VFile) => {
    walk(tree);
    // cache.set(activeSlug, cleanup(content));
    
    const path = file.path.match(/.*content(.*)\.\w+$/i)?.[1] ?? '';
    const filename = (file.basename ?? '').replace(/[-_]/g, ' ').replace(/\.\w+$/, '');
    output[path] = {
      title: captalize(filename),
      data: Object.fromEntries(cache)
    };
    cache.clear();
    
    return tree;
  };
}
