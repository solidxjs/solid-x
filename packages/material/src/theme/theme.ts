import { ref, sys } from './theme.vars.css';

export const THEME_CLASS = {
  DARK_THEME: 'sx-dark'
} as const;

export type Theme = {
  /**
   * The name of the theme.
   */
  name: string;
  ref: Record<string, any>;
  sys: Record<string, any>;

  // /**
  //  * Colorscheme variables.
  //  */
  // color: ColorVars;

  // /**
  //  * Elevation variables.
  //  */
  // elevation: ElevationVars;

  // /**
  //  * Motion variables.
  //  */
  // motion: MotionVars;

  // /**
  //  * Color palette variables.
  //  */
  // palette: PaletteVars;

  // /**
  //  * Rounding shape variables.
  //  */
  // shape: ShapeVars;

  // /**
  //  * Typeface variables.
  //  */
  // typeface: TypefaceVars;

  // /**
  //  * Typescale variables.
  //  */
  // typescale: TypescaleVars;
};

export const Material: Theme = {
  name: 'Material',
  ref,
  sys
  // color: color,
  // elevation: elevation,
  // motion: motion,
  // palette: palette,
  // shape: shape,
  // typeface: typeface,
  // typescale: typescale
};
