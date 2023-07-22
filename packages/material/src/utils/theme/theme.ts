/**
 * converts camelCase to kebab-case string.
 *
 * @param {string} str
 * @returns returns a kebab-case version of string
 */
const kebabCase = (str: string) =>
  str.replace(/(?!^)([A-Z\u00C0-\u00D6])/g, (match) => '-' + match.toLowerCase());

const PREFIX = 'sx';

/**
 * Generates CSS var name
 *
 * @param varPrefix Prefix for the css var
 * @param path The path of the css var token
 * @returns CSS var string
 */
export const varMapFn = (varPrefix: string, path: string[]) =>
  `${PREFIX}-${varPrefix}-${path.map(kebabCase).join('-')}`;
