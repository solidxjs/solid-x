import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { glob } from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Plugin, defineConfig, Rollup } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';

type OutputThemeAsset = Rollup.OutputAsset;

const vanillaExtractAssetReg = /.css.ts.vanilla/;

/**
 * Creates a file in the specified destination and creates all the
 * specified directories if they ddo not exist.
 *
 * For example:
 * createDestinationFile('built/sb-static/theme/theme.css')
 * will create
 *
 * |-- built
 * |   |-- sb-static
 * |       |-- theme
 * |           |-- theme.css
 *
 * @param dest The destination file that needs to be created
 */
const createDestinationFile = (dest: string) => {
  if (fs.existsSync(dest)) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.closeSync(fs.openSync(dest, 'w'));
};

/**
 * Concatenates all the contents and writes into a single destination
 * file.
 *
 * @param dest The destination file
 * @param files The content to be written to the destination file
 */
const writeDestinationFile = (dest: string, files: Map<string, OutputThemeAsset>) => {
  files.forEach(({ source }, fileName) => {
    const segmentStart = `/* start:${fileName} */\n`;
    const segmentEnd = `\n/* end:${fileName} */\n`;
    const newContent = `${segmentStart}${source}${segmentEnd}`;

    const contents = fs.readFileSync(dest).toString();

    // only add if it hasn't been already
    if (contents.indexOf(fileName) === -1) {
      fs.appendFileSync(dest, newContent);
    }
  });
};

/**
 * A custom vite plugin to copy over the generated theme files to a storybook
 * static directory.
 *
 * For example:
 * Copies dist/theme/theme.css -> built/sb-static/theme/theme.css
 *
 * @returns custom vite plugin
 */
const copyThemeFiles = () => {
  const emittedThemeFiles = new Map<string, OutputThemeAsset>();
  return {
    name: 'copy-theme-files',
    generateBundle(_, bundle) {
      Object.entries(bundle)
        .filter(([fileName, bundle]) => bundle.type === 'asset' && fileName.endsWith('theme.css'))
        .forEach(([fileName, bundle]) =>
          emittedThemeFiles.set(fileName, bundle as OutputThemeAsset),
        );
    },
    closeBundle() {
      ['dist/theme.css', 'built/sb-static/theme.css'].forEach((dest) => {
        createDestinationFile(dest);
        writeDestinationFile(dest, emittedThemeFiles);
      });
    },
  } as Plugin;
};

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
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
      outDir: 'dist/types',
    }),
    solidPlugin({ ssr: false }),
    // Copy over CSS assets for storybook
    copyThemeFiles(),
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
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: [
        {
          ...commonRollupOutputOptions,
          format: 'cjs',
          dir: 'dist/cjs',
        },
        {
          ...commonRollupOutputOptions,
          format: 'esm',
          dir: 'dist/esm',
        },
      ],
    },
  },
}));
