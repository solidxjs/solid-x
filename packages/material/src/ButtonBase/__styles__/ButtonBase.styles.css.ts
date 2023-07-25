import { style } from '@vanilla-extract/css';

/****************
 * Private Vars *
 ****************/

/********************
 * Component Styles *
 ********************/
const base = style({
  alignItems: 'center',
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  outline: 'none',
  position: 'relative',
  textDecoration: 'none',

  // use ::before for container
  '::before': {
    borderRadius: 'inherit',
    content: '',
    inset: 0,
    position: 'absolute',
    zIndex: -1
  },

  // use ::after for state layer
  '::after': {
    borderRadius: 'inherit',
    content: '',
    inset: 0,
    position: 'absolute',
    zIndex: -1
  },

  ':disabled': {
    cursor: 'default',
    pointerEvents: 'none'
  }
});

/**********************
 * Component Variants *
 **********************/

/********************
 * Component Recipe *
 ********************/

/***************************
 * Component Variant types *
 ***************************/

/***********
 * Exports *
 ***********/
export { base };
