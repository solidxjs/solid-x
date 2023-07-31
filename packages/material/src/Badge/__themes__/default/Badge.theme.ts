import { componentRecipe, styles } from '../Badge.styles.css';
import { tokens, type Tokens } from '../Badge.tokens.css';
import { defaultTheme } from './Badge.default.css';

/*******************
 * Component Theme *
 *******************/
export const BadgeTheme = {
  componentName: 'Badge',
  componentRecipe,
  defaultTheme,
  styles,
  tokens,
} as const;

/********************
 * Component Tokens *
 ********************/
export type BadgeTokens = Tokens;
