import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';

const vanillaExtractAssetReg = /.css.ts.vanilla/;

export default defineConfig({
  plugins: [
    // we will be using the rollup plugin here as it generates the files in the way
    // want in a component library.
    vanillaExtractPlugin({
      identifiers: 'debug',
      cwd: path.resolve(__dirname, 'src')
    }),
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json')
    }),
    solidPlugin({ ssr: false })
  ],
  build: {
    lib: {
      entry: Object.fromEntries([
        ...glob.sync('src/{**/,/}index.ts{,x}').map(file => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/Badge/index.ts becomes Badge/foo
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          ),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url))
        ]),
        ...glob.sync('src/theme/**/*.ts').map(file => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          ),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ]),
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        assetFileNames({ name = '' }) {
          if (vanillaExtractAssetReg.test(name)) {
            return name.replace(vanillaExtractAssetReg, '');
          }
          return name;
        },
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name].js',
        sourcemap: true
      }
    }
  }
});
