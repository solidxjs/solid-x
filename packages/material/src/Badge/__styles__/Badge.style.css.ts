import { style } from '@vanilla-extract/css';
import { sys } from '../../theme/theme.vars.css';

const { color, shape, typescale } = sys;

const labelSmall = style({
  fontFamily: typescale.label.sm.font,
  lineHeight: typescale.label.sm.lineHeight,
  fontSize: typescale.label.sm.size,
  fontWeight: typescale.label.sm.weight,
  letterSpacing: typescale.label.sm.tracking
});

export const containerStyles = style({
  alignItems: 'center',
  backgroundColor: color.error.base,
  borderRadius: shape.corner.full,
  boxSizing: 'border-box',
  color: color.onError.base,
  display: 'inline-flex',
  justifyContent: 'center'
});

export const textStyles = style([labelSmall]);

export const variantStyles = {
  dot: style({
    height: '6px',
    width: '6px'
  }),
  standard: style({
    height: '16px',
    minWidth: '16px',
    padding: '0 4px'
  })
} as const;
