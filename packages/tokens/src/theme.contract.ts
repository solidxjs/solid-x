import { createGlobalThemeContract } from '@vanilla-extract/css';
import * as refTokens from './ref';
import * as sysTokens from './sys';

/**
 * converts camelCase to kebab-case string.
 *
 * @param {string} str
 * @returns returns a kebab-case version of string
 */
const kebabCase = (str: string) =>
  str.replace(/(?!^)([A-Z\u00C0-\u00D6])/g, (match) => '-' + match.toLowerCase());

const PREFIX = 'sx';
const varMapFn = (_: null | string, path: string[]) => `${PREFIX}-${path.map(kebabCase).join('-')}`;

const ref = createGlobalThemeContract(refTokens, varMapFn);
const sys = createGlobalThemeContract(sysTokens, varMapFn);

export { ref, sys };
