import { componentRecipe, styles } from '../FAB.styles.css';
import { tokens } from '../FAB.tokens.css';
import { defaultTheme } from './FAB.default.css';

/*******************
 * Component Theme *
 *******************/
export const FABTheme = {
  componentName: 'FAB',
  componentRecipe,
  defaultTheme,
  styles,
  tokens,
} as const;

/********************
 * Component Tokens *
 ********************/
export type FABTokens = typeof tokens;
