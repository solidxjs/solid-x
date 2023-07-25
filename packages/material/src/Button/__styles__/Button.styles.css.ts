import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { baseTheme } from '../__theme__/theme.default.css';
import { tokens } from '../__theme__/theme.tokens.css';

/****************
 * Private Vars *
 ****************/
const containerElevation = createVar();
const containerColor = createVar();
const containerOpacity = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();
const labelColor = createVar();
const labelFont = createVar();
const labelLineHeight = createVar();
const labelOpacity = createVar();
const labelSize = createVar();
const labelTracking = createVar();
const labelWeight = createVar();
const outlineColor = createVar();
const outlineWidth = createVar();

/***************************
 * Component Variant types *
 ***************************/
type IconVariant = 'leading' | 'trailing';
type StyleVariant = 'elevated' | 'filled' | 'filledTonal' | 'outlined' | 'text';

/********************
 * Component Styles *
 ********************/
const base = style([
  baseTheme,
  {
    blockSize: '40px',
    borderRadius: '20px',
    gap: '8px',
    minInlineSize: '64px',

    // Overridable properties
    boxShadow: containerElevation,
    color: labelColor,
    opacity: labelOpacity,
    fontFamily: labelFont,
    fontSize: labelSize,
    fontWeight: labelWeight,
    letterSpacing: labelTracking,
    lineHeight: labelLineHeight,

    // use ::before for container
    '::before': {
      borderStyle: 'solid',

      // Overridable properties
      background: containerColor,
      borderColor: outlineColor,
      borderWidth: outlineWidth,
      opacity: containerOpacity
    },

    // use ::after for state layer
    '::after': {
      // Overridable properties
      background: stateLayerColor,
      opacity: stateLayerOpacity
    }
  }
]);

const icon = style({
  display: 'inline-flex'
});

/**********************
 * Component Variants *
 **********************/
const getStylesForVariant = (variant: StyleVariant) =>
  ({
    vars: {
      [containerColor]: tokens[variant].container.color,
      [containerElevation]: tokens[variant].container.elevation,
      [containerOpacity]: '1',
      [labelColor]: tokens[variant].label.color,
      [labelFont]: tokens[variant].label.font,
      [labelLineHeight]: tokens[variant].label.lineHeight,
      [labelOpacity]: '1',
      [labelSize]: tokens[variant].label.size,
      [labelTracking]: tokens[variant].label.tracking,
      [labelWeight]: tokens[variant].label.weight,
      [stateLayerColor]: 'transparent',
      [stateLayerOpacity]: '0',
      [outlineColor]: tokens[variant].container.outlineColor,
      [outlineWidth]: tokens[variant].container.outlineWidth
    },

    // Pseudo elements need to be defined in the following order
    // :focus < :hover < :active < :disabled

    ':focus-visible': {
      vars: {
        [containerElevation]: tokens[variant].focus.container.elevation,
        [labelColor]: tokens[variant].focus.label.color,
        [outlineColor]: tokens[variant].focus.container.outlineColor,
        [stateLayerColor]: tokens[variant].focus.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].focus.stateLayer.opacity
      }
    },

    ':hover': {
      vars: {
        [containerElevation]: tokens[variant].hovered.container.elevation,
        [labelColor]: tokens[variant].hovered.label.color,
        [outlineColor]: tokens[variant].hovered.container.outlineColor,
        [stateLayerColor]: tokens[variant].hovered.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].hovered.stateLayer.opacity
      }
    },

    ':active': {
      vars: {
        [containerElevation]: tokens[variant].pressed.container.elevation,
        [labelColor]: tokens[variant].pressed.label.color,
        [outlineColor]: tokens[variant].pressed.container.outlineColor,
        [stateLayerColor]: tokens[variant].pressed.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].pressed.stateLayer.opacity
      }
    },

    ':disabled': {
      vars: {
        [containerColor]: tokens[variant].disabled.container.color,
        [containerElevation]: tokens[variant].disabled.container.elevation,
        [containerOpacity]: tokens[variant].disabled.container.opacity,
        [labelColor]: tokens[variant].disabled.label.color,
        [labelOpacity]: tokens[variant].disabled.label.opacity,
        [outlineColor]: tokens[variant].disabled.container.outlineColor
      }
    }
  } as const);

const variants = {
  icon: {
    leading: {
      paddingInlineStart: '16px',
      paddingInlineEnd: '24px'
    },
    none: {
      paddingInline: '24px'
    },
    trailing: {
      paddingInlineStart: '24px',
      paddingInlineEnd: '16px'
    }
  },
  variant: {
    elevated: getStylesForVariant('elevated'),
    filled: getStylesForVariant('filled'),
    filledTonal: getStylesForVariant('filledTonal'),
    outlined: getStylesForVariant('outlined'),
    text: getStylesForVariant('text')
  }
};

/********************
 * Component Recipe *
 ********************/
const button = recipe({
  base,
  variants,
  defaultVariants: {
    icon: 'none',
    variant: 'outlined'
  }
});

/***********
 * Exports *
 ***********/
export { button, icon };
export type { IconVariant, StyleVariant };
