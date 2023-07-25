import { createThemeContract } from '@vanilla-extract/css';

export const tokens = createThemeContract({
  small: {
    color: null,
    shape: null,
    size: null
  },
  large: {
    container: {
      color: null,
      shape: null,
      size: null
    },
    label: {
      color: null,
      font: null,
      lineHeight: null,
      size: null,
      tracking: null,
      weight: null
    }
  }
});
