import { nodeTypes } from '@mdx-js/mdx';
import { PluggableList } from '@mdx-js/mdx/lib/core';
import mdxPlugin, { type Options as MDXOptions } from '@mdx-js/rollup';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkShikiTwoslash from 'remark-shiki-twoslash';
import { Plugin } from 'vite';

export const mdx = (options: MDXOptions) =>
  [
    {
      ...mdxPlugin({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: '~/libs/solid-mdx',
        rehypePlugins: [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          [rehypeRaw, { passThrough: nodeTypes }],
        ] as PluggableList,
        remarkPlugins: [
          ...(options.remarkPlugins ?? []),
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
                lib: ['DOM', 'ES2020'],
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
                  '~/*': ['./src'],
                },
              },
            },
          ],
        ],
      }),
      enforce: 'pre',
    },
  ] as Plugin[];
