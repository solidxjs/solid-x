import { SysTokens, sys } from './theme.tokens.css';

export const SELECTORS = {
  DARK_THEME: '[data-sx-theme="dark"]',
} as const;

export type Theme = SysTokens & {
  /**
   * The name of the theme.
   */
  name: string;
};

export const Material: Theme = {
  name: 'Material',
  ...sys,
};
