import { refContract, sysContract } from '@solid-x/tokens';
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

// export const color = createGlobalThemeContract(sys.color, varMapFn);
// export const elevation = createGlobalThemeContract(sys.elevation, varMapFn);
// export const motion = createGlobalThemeContract(sys.motion, varMapFn);
// export const palette = createGlobalThemeContract(ref.palette, varMapFn);
// export const shape = createGlobalThemeContract(sys.shape, varMapFn);
// export const typeface = createGlobalThemeContract(ref.typeface, varMapFn);
// export const typescale = createGlobalThemeContract(sys.typescale, varMapFn);

// export type ColorVars = typeof color;
// export type ElevationVars = typeof elevation;
// export type MotionVars = typeof motion;
// export type PaletteVars = typeof palette;
// export type ShapeVars = typeof shape;
// export type TypefaceVars = typeof typeface;
// export type TypescaleVars = typeof typescale;

export const ref = createGlobalThemeContract(refContract, (_, path) => varMapFn('ref', path));
export const sys = createGlobalThemeContract(sysContract, (_, path) => varMapFn('sys', path));
