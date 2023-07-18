import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    solidPlugin({ ssr: false }),
    vanillaExtractPlugin()
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      './setupVitest.js',
    ],
    transformMode: { web: [/\.[jt]sx?$/] },
  },
  resolve: {
    conditions: ['development', 'browser'],
  }
});
