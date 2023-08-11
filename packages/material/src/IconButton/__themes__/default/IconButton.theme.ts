import { componentRecipe, styles } from '../IconButton.styles.css';
import { tokens } from '../IconButton.tokens.css';
import { defaultTheme } from './IconButton.default.css';

/*******************
 * Component Theme *
 *******************/
export const IconButtonTheme = {
  componentName: 'IconButton',
  componentRecipe,
  defaultTheme,
  styles,
  tokens,
} as const;

/********************
 * Component Tokens *
 ********************/
export type IconButtonTokens = typeof tokens;
