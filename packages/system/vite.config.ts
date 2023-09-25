import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';
import injectScript from './plugins/vite-plugin-script-inject';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
      outDir: 'dist/types',
    }),
    solidPlugin({ ssr: false }),
    injectScript(),
  ],
  build: {
    lib: {
      entry: Object.fromEntries([
        ...glob.sync('src/{**/,/}index.ts{,x}').map((file) => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/Badge/index.ts becomes Badge/foo
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ]),
    },
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: [
        {
          chunkFileNames: '[name]-[hash].js',
          entryFileNames: '[name].js',
          exports: 'named',
          sourcemap: true,
          format: 'cjs',
          dir: 'dist/cjs',
        },
        {
          chunkFileNames: '[name]-[hash].js',
          entryFileNames: '[name].js',
          exports: 'named',
          sourcemap: true,
          format: 'esm',
          dir: 'dist/esm',
        },
      ],
    },
  },
});
