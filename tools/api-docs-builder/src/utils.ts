import { outputFileSync, readdirSync, statSync } from 'fs-extra';
import { minimatch } from 'minimatch';
import path from 'node:path';
import prettier from 'prettier';

const indexFileRegex = /^index.ts$/;

/**
 * Returns index.ts in any directory or null
 * @param {string} directory
 * @returns the index file path if found, null otherwise
 */
function getIndexFile(directory: string) {
  const items = readdirSync(directory);
  const indexFile = items.find((file) => indexFileRegex.test(file));
  return indexFile ? path.join(directory, indexFile) : null;
}

type Component = {
  /**
   * The name of the component source file.
   */
  filename: string;

  /**
   * The path of the index file of the component.
   */
  indexFile: string | null;
};

/**
 * Generates a flat list of component source files in the provided directory.
 * @param directory The source directory
 * @param components The list of found components
 * @returns the list of component source files
 */
export function findComponents(directory: string, components: Component[] = []) {
  const items = readdirSync(directory);

  items.forEach((item) => {
    const itemPath = path.resolve(directory, item);

    if (statSync(itemPath).isDirectory()) {
      findComponents(itemPath, components);
      return;
    }

    if (minimatch(itemPath, '**/index.ts')) return;

    components.push({
      filename: itemPath,
      indexFile: getIndexFile(directory),
    });
  });

  return components;
}

/**
 * Extracts the package information for a component file.
 * @param filePath The file path
 * @returns the extracted package information
 */
export function extractPackageFile(filePath: string) {
  filePath = filePath.replace(new RegExp(`\\${path.sep}`, 'g'), '/');
  const match = filePath.match(
    /.*\/packages.*\/(?<packagePath>[^/]+)\/src\/(.*\/)?(?<name>[^/]+)\.(js|tsx|ts|d\.ts)/,
  );
  return {
    packagePath: match?.groups?.['packagePath'],
    name: match?.groups?.['name'],
  };
}

/**
 * Writes the file with prettier applied
 * @param filename The name of the file to be written on.
 * @param data The data to be written
 * @param prettierConfigPath The path for the prettier config
 * @param options Extra options for fs.writeFileSync
 */
export async function writePrettifiedFile(
  filename: string,
  data: string,
  prettierConfigPath: string,
  options: object = {},
) {
  const prettierConfig = await prettier.resolveConfig(filename, {
    config: prettierConfigPath,
  });
  if (prettierConfig === null) {
    throw new Error(
      `Could not resolve config for '${filename}' using prettier config path '${prettierConfigPath}'.`,
    );
  }

  const prettifiedData = await prettier.format(data, { ...prettierConfig, filepath: filename });
  outputFileSync(filename, prettifiedData, {
    encoding: 'utf8',
    ...options,
  });
}
