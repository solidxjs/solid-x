import { createThemeContract } from '@vanilla-extract/css';

export const tokens = {
  small: createThemeContract({
    color: null,
    shape: null,
    size: null,
  }),
  large: createThemeContract({
    container: {
      color: null,
      shape: null,
      size: null,
    },
    label: {
      color: null,
      font: null,
      lineHeight: null,
      size: null,
      tracking: null,
      weight: null,
    },
  }),
};

export type Tokens = typeof tokens;
