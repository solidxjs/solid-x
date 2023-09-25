import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin({ ssr: false })],
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['default', 'html'],
    outputFile: './reports/index.html',
    setupFiles: ['./setupVitest.js'],
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
