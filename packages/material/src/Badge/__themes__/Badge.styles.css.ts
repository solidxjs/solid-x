import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { tokens } from './Badge.tokens.css';

/********************
 * Component Styles *
 ********************/
// TODO: Use Label instead
const text = style({
  color: tokens.large.label.color,
  fontFamily: tokens.large.label.font,
  lineHeight: tokens.large.label.lineHeight,
  fontSize: tokens.large.label.size,
  fontWeight: tokens.large.label.weight,
  letterSpacing: tokens.large.label.tracking,
});

const base = style({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
});

/**********************
 * Component Variants *
 **********************/
const variants = {
  variant: {
    small: {
      backgroundColor: tokens.small.color,
      borderRadius: tokens.small.shape,
      height: tokens.small.size,
      width: tokens.small.size,
    },
    large: {
      backgroundColor: tokens.large.container.color,
      borderRadius: tokens.large.container.shape,
      height: tokens.large.container.size,
      minWidth: tokens.large.container.size,
      paddingInline: '4px',
    },
  },
};

/********************
 * Component Recipe *
 ********************/
const componentRecipe = recipe({
  base,
  variants,
  defaultVariants: {
    variant: 'large',
  },
});

/***********
 * Exports *
 ***********/
const styles = { base, text };
export { componentRecipe, styles };
