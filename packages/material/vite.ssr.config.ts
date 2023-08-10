import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Rollup, defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const vanillaExtractAssetReg = /.css.ts.vanilla/;

const commonRollupOutputOptions: Rollup.OutputOptions = {
  assetFileNames({ name = '' }) {
    if (vanillaExtractAssetReg.test(name)) {
      return name.replace(vanillaExtractAssetReg, '');
    }
    return name;
  },
  chunkFileNames: '[name]-[hash].js',
  entryFileNames: '[name].js',
  exports: 'named',
  sourcemap: true,
};

export default defineConfig(({ mode }) => ({
  plugins: [
    // we will be using the rollup plugin here as it generates the files in the way
    // want in a component library.
    vanillaExtractPlugin({
      identifiers: mode === 'development' ? 'debug' : 'short',
      cwd: path.resolve(__dirname, 'src'),
    }),
    solidPlugin({ solid: { generate: 'ssr' } }),
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
        ...glob.sync('src/theme/**/*.ts').map((file) => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ]),
    },
    outDir: 'dist/server',
    minify: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: [{
        ...commonRollupOutputOptions,
        format: 'esm',
        dir: 'dist/server',
      }],
    },
  },
}));
