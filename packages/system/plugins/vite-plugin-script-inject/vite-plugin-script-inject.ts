import { Plugin } from 'vite';
import { minify } from 'terser';
import fs from 'node:fs';

const INJECTION_REGEX = /\.js\?inject$/;

export default function injectScript() {
  return [
    {
      name: 'vite-plugin-script-inject',
      async load(id) {
        if (INJECTION_REGEX.test(id)) {
          const filename = id.replace(/\?inject$/, '');
          const contents = fs.readFileSync(filename, { encoding: 'utf-8' });
          const { code: minified } = await minify(contents);
          return `export default "${minified?.replace(/"/g, '\\"') ?? ''}"`;
        }
      },
      enforce: 'pre',
    },
  ] as Plugin[];
}
