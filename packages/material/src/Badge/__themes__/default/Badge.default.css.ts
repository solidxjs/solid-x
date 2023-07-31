import { createTheme } from '@vanilla-extract/css';
import { sys } from '../../../theme';
import { tokens } from '../Badge.tokens.css';

export const defaultTheme = {
  small: createTheme(tokens.small, {
    color: sys.color.error.base,
    shape: sys.shape.corner.full,
    size: '6px',
  }),
  large: createTheme(tokens.large, {
    container: {
      color: sys.color.error.base,
      shape: sys.shape.corner.full,
      size: '16px',
    },
    label: {
      color: sys.color.onError.base,
      font: sys.typescale.label.sm.font,
      lineHeight: sys.typescale.label.sm.lineHeight,
      size: sys.typescale.label.sm.size,
      tracking: sys.typescale.label.sm.tracking,
      weight: sys.typescale.label.sm.weight,
    },
  }),
};
