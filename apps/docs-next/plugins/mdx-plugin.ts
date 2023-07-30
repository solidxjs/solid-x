// TODO: Add types in the future
/* eslint-disable @typescript-eslint/no-explicit-any */
import { nodeTypes } from '@mdx-js/mdx';
import mdxPlugin, { type Options as MDXOptions } from '@mdx-js/rollup';
import rehypeRaw from 'rehype-raw';
import remarkShikiTwoslash from 'remark-shiki-twoslash';
import { Plugin } from 'vite';
import { rehypeCollectHeadings, rehypeHeadingIds } from './rehype-collect-headings';

export function mdx(options: MDXOptions) {
  const cache = new Map();
  const headingsCache = new Map();
  const ogMdxPlugin = {
    ...mdxPlugin({
      jsx: true,
      jsxImportSource: 'solid-js',
      providerImportSource: '~/libs/solid-mdx',
      rehypePlugins: [
        ...options.rehypePlugins ?? [],
        [rehypeHeadingIds, { cache: headingsCache }],
        rehypeCollectHeadings,
        [rehypeRaw, { passThrough: nodeTypes }]
      ],
      remarkPlugins: [
        ...options.remarkPlugins ?? [],
        [
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          remarkShikiTwoslash.default,
          {
            disableImplicitReactImport: true,
            includeJSDocInHover: true,
            themes: ['github-light', 'github-dark'],
            // TODO: Get these from base tsconfig.json?
            defaultOptions: {
              lib: ['DOM', 'ES2020']
            },
            defaultCompilerOptions: {
              allowSyntheticDefaultImports: true,
              esModuleInterop: true,
              target: 'ESNext',
              lib: ['DOM', 'ES2020'],
              jsxImportSource: 'solid-js',
              jsx: 'preserve',
              types: ['vite/client'],
              paths: {
                '~/*': ['./src']
              }
            }
          }
        ]
      ]
    }),
    enforce: 'pre',
  };

  return [
    {
      ...ogMdxPlugin,
      async transform(code: any, id: any) {
        if (id.endsWith('.mdx') || id.endsWith('.md')) {
          if (cache.has(code)) {
            return cache.get(code);
          }
          const result = await (ogMdxPlugin.transform as any)?.call(this, code, id);
          cache.set(code, result);

          return result;
        }

        if (id.endsWith('.mdx?meta') || id.endsWith('.md?meta')) {
          id = id.replace(/\?meta$/, '');
          const getCode = () => `
            export function getHeadings() { return ${JSON.stringify(headingsCache.get(id))}; }
          `;
          if (cache.has(code)) {
            return { code: getCode() };
          }
          const result = await (ogMdxPlugin.transform as any)?.call(this, code, id);
          cache.set(code, result);
          return { code: getCode() };
        }
      },
    },
  ] as Plugin[];
}
