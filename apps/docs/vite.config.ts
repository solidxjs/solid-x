import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import netlifySolid from 'solid-start-netlify';
import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { mdx } from './plugins/mdx-plugin';

const IGNORE_WARNINGS = ['MODULE_LEVEL_DIRECTIVE', 'EVAL'];

export default defineConfig({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (IGNORE_WARNINGS.includes(warning.code ?? '')) return;
        warn(warning);
      },
    },
  },
  plugins: [
    mdx({
      rehypePlugins: [rehypePrettyCode],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    }),
    solid({
      adapter: netlifySolid({}),
      extensions: ['.mdx', '.md'],
      routesDir: 'content',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'built/search-data.json',
          dest: '.',
        },
      ],
    }),
  ],
});
