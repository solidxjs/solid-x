import { refTokens, sysTokens } from '@solid-x/tokens';
import { createGlobalThemeContract } from '@vanilla-extract/css';
import { varMapFn } from '../utils/theme';

export const ref = createGlobalThemeContract(refTokens, (_, path) => varMapFn('ref', path));
export const sys = createGlobalThemeContract(sysTokens, (_, path) => varMapFn('sys', path));

export type RefTokens = typeof ref;
export type SysTokens = typeof sys;
