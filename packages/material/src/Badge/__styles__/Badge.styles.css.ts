import { style, styleVariants } from '@vanilla-extract/css';
import { sys } from '../../theme/theme.vars.css';
import { VariantMap } from '../../utils/types';

const { color, shape, typescale } = sys;

/********************
 * Component Styles *
 ********************/
// TODO: Use Label instead
const label = style({
  fontFamily: typescale.label.sm.font,
  lineHeight: typescale.label.sm.lineHeight,
  fontSize: typescale.label.sm.size,
  fontWeight: typescale.label.sm.weight,
  letterSpacing: typescale.label.sm.tracking
});

const base = style({
  alignItems: 'center',
  backgroundColor: color.error.base,
  borderRadius: shape.corner.full,
  boxSizing: 'border-box',
  color: color.onError.base,
  display: 'inline-flex',
  justifyContent: 'center'
});

export const text = style([label]);

/**********************
 * Component Variants *
 **********************/
export type Variants = 'dot' | 'standard';

const variantMap: VariantMap<Variants> = {
  dot: {
    height: '6px',
    width: '6px'
  },
  standard: {
    height: '16px',
    minWidth: '16px',
    padding: '0 4px'
  }
};

export const variants = styleVariants(variantMap, (variantStyles) => [base, variantStyles]);
