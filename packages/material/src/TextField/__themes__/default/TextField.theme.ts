import { componentRecipe, styles } from '../TextField.styles.css';
import { tokens } from '../TextField.tokens.css';
import { defaultTheme } from './TextField.default.css';

/*******************
 * Component Theme *
 *******************/
export const TextFieldTheme = {
  componentName: 'TextField',
  componentRecipe,
  defaultTheme,
  styles,
  tokens,
} as const;

/********************
 * Component Tokens *
 ********************/
export type TextFieldTokens = typeof tokens;
