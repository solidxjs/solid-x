import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import vercelSolid from 'solid-start-vercel';
import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { mdx } from './plugins/mdx-plugin';

export default defineConfig({
  plugins: [
    mdx({
      rehypePlugins: [rehypePrettyCode],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    }),
    solid({
      adapter: vercelSolid({}),
      extensions: ['.mdx', '.md'],
      routesDir: '../content',
    }),
    viteStaticCopy({
      targets: [{
        src: 'built/search-data.json',
        dest: '.'
      }]
    })
  ],
});
