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
const labelTextColor = createVar();
const labelTextFont = createVar();
const labelTextLineHeight = createVar();
const labelTextOpacity = createVar();
const labelTextSize = createVar();
const labelTextTracking = createVar();
const labelTextWeight = createVar();
const outlineColor = createVar();
const outlineWidth = createVar();

/***************************
 * Component Variant types *
 ***************************/
type StyleVariant = 'elevated' | 'filled' | 'filledTonal' | 'outlined' | 'text';
type IconVariant = 'leading' | 'trailing';

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
    color: labelTextColor,
    opacity: labelTextOpacity,
    fontFamily: labelTextFont,
    fontSize: labelTextSize,
    fontWeight: labelTextWeight,
    letterSpacing: labelTextTracking,
    lineHeight: labelTextLineHeight,

    // use ::before for container
    '::before': {
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
type Variant = 'elevated' | 'filled' | 'outlined' | 'text' | 'filledTonal';
const getStylesForVariant = (variant: Variant) =>
  ({
    vars: {
      [containerColor]: tokens[variant].container.color,
      [containerElevation]: tokens[variant].container.elevation,
      [containerOpacity]: '1',
      [labelTextColor]: tokens[variant].labelText.color,
      [labelTextFont]: tokens[variant].labelText.font,
      [labelTextLineHeight]: tokens[variant].labelText.lineHeight,
      [labelTextOpacity]: '1',
      [labelTextSize]: tokens[variant].labelText.size,
      [labelTextTracking]: tokens[variant].labelText.tracking,
      [labelTextWeight]: tokens[variant].labelText.weight,
      [outlineColor]: tokens[variant].container.outlineColor,
      [outlineWidth]: tokens[variant].container.outlineWidth
    },

    // Pseudo elements need to be defined in the following order
    // :focus < :hover < :active < :disabled

    ':focus-visible': {
      vars: {
        [containerElevation]: tokens[variant].focus.container.elevation,
        [labelTextColor]: tokens[variant].focus.labelText.color,
        [outlineColor]: tokens[variant].focus.container.outlineColor,
        [stateLayerColor]: tokens[variant].focus.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].focus.stateLayer.opacity
      }
    },

    ':hover': {
      vars: {
        [containerElevation]: tokens[variant].hovered.container.elevation,
        [labelTextColor]: tokens[variant].hovered.labelText.color,
        [outlineColor]: tokens[variant].hovered.container.outlineColor,
        [stateLayerColor]: tokens[variant].hovered.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].hovered.stateLayer.opacity
      }
    },

    ':active': {
      vars: {
        [containerElevation]: tokens[variant].pressed.container.elevation,
        [labelTextColor]: tokens[variant].pressed.labelText.color,
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
        [labelTextColor]: tokens[variant].disabled.labelText.color,
        [labelTextOpacity]: tokens[variant].disabled.labelText.opacity,
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
