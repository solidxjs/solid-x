import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    // we will be using the rollup plugin here as it generates the files in the way
    // want in a component library.
    vanillaExtractPlugin({
      identifiers: 'debug',
      cwd: resolve(__dirname, 'src')
    }),
    // themePlugin(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json')
    }),
    solidPlugin({ ssr: false })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (_, entryName) => `${entryName}.js`,
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true
      }
    }
  }
});
