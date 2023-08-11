import { componentRecipe, styles } from '../Button.styles.css';
import { tokens } from '../Button.tokens.css';
import { defaultTheme } from './Button.default.css';

/*******************
 * Component Theme *
 *******************/
export const ButtonTheme = {
  componentName: 'Button',
  componentRecipe,
  defaultTheme,
  styles,
  tokens,
} as const;

/********************
 * Component Tokens *
 ********************/
export type ButtonTokens = typeof tokens;
