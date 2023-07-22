import { RefTokens, SysTokens, ref, sys } from './theme.vars.css';

export const THEME_CLASS = {
  DARK_THEME: 'sx-dark'
} as const;

export type Theme = {
  /**
   * The name of the theme.
   */
  name: string;
  /**
   * The reference tokens.
   */
  ref: RefTokens;
  /**
   * The system tokens.
   */
  sys: SysTokens;
};

export const Material: Theme = {
  name: 'Material',
  ref,
  sys
};
