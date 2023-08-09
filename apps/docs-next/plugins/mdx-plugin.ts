// TODO: Add types in the future
/* eslint-disable @typescript-eslint/no-explicit-any */
import { nodeTypes } from '@mdx-js/mdx';
import mdxPlugin, { type Options as MDXOptions } from '@mdx-js/rollup';
import fs from 'fs-extra';
import path from 'node:path';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkShikiTwoslash from 'remark-shiki-twoslash';
import { Plugin } from 'vite';
import remarkStructurizeData from './remarkStructurizeData';

const BUILT_DIR = path.resolve(process.cwd(), 'built');
const SEARCH_DATA_FILENAME = path.resolve(BUILT_DIR, 'search-data.json');
const searchData = {};

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
        ],
        remarkPlugins: [
          ...(options.remarkPlugins ?? []),
          [remarkStructurizeData, { output: searchData }],
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
    {
      name: 'generate-search-json',
      buildStart() {
        fs.emptyDirSync(BUILT_DIR);
      },
      buildEnd() {
        fs.ensureFileSync(SEARCH_DATA_FILENAME);
        fs.writeJsonSync(SEARCH_DATA_FILENAME, searchData);
      },
    },
  ] as Plugin[];
