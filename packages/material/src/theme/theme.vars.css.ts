import { refTokens, sysTokens } from '@solid-x/tokens';
import { createGlobalThemeContract } from '@vanilla-extract/css';

/**
 * converts camelCase to kebab-case string.
 *
 * @param {string} str
 * @returns returns a kebab-case version of string
 */
const kebabCase = (str: string) =>
  str.replace(/(?!^)([A-Z\u00C0-\u00D6])/g, (match) => '-' + match.toLowerCase());

const PREFIX = 'sx';
const varMapFn = (varPrefix: string, path: string[]) =>
  `${PREFIX}-${varPrefix}-${path.map(kebabCase).join('-')}`;

export const ref = createGlobalThemeContract(refTokens, (_, path) => varMapFn('ref', path));
export const sys = createGlobalThemeContract(sysTokens, (_, path) => varMapFn('sys', path));

export type RefTokens = typeof ref;
export type SysTokens = typeof sys;
