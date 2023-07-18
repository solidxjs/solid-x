import { style } from '@vanilla-extract/css';

const labelSmall = style({
  fontFamily: '"Roboto", sans-serif',
  lineHeight: '16px',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 0.5
});

export const containerStyles = style({
  alignItems: 'center',
  backgroundColor: 'red',
  boxSizing: 'border-box',
  color: 'white',
  display: 'inline-flex',
  justifyContent: 'center'
});

export const textStyles = style([labelSmall]);

export const variantStyles = {
  dot: style({
    borderRadius: '3px',
    height: '6px',
    width: '6px'
  }),
  standard: style({
    borderRadius: '8px',
    height: '16px',
    minWidth: '16px',
    padding: '0 4px'
  })
} as const;
