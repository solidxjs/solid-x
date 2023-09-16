import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';
import solidDevTools from 'solid-devtools/vite';
import { UserConfig, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
    }),
    solidPlugin({ ssr: false }),
    solidDevTools({ autoname: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (_, entryName) => `${entryName}.js`,
      formats: ['es'],
    },
    minify: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    },
  },
} as UserConfig);
