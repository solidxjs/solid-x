import { ComplexStyleRule, createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { CompoundVariantStyles, VariantOptions } from '../../utils/theme';
import { tokens } from './FAB.tokens.css';

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

/***************************
 * Component Variant types *
 ***************************/
type StyleVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';

/********************
 * Component Styles *
 ********************/
const base = style({
  border: 'none',

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
    // Overridable properties
    background: containerColor,
    opacity: containerOpacity,
  },

  // use ::after for state layer
  '::after': {
    // Overridable properties
    background: stateLayerColor,
    opacity: stateLayerOpacity,
  },
});

const icon = style({
  display: 'inline-flex',
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
    },

    // Pseudo elements need to be defined in the following order
    // :focus < :hover < :active < :disabled

    ':focus-visible': {
      vars: {
        [containerElevation]: tokens[variant].focus.container.elevation,
        [stateLayerColor]: tokens[variant].focus.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].focus.stateLayer.opacity,
      },
    },

    ':hover': {
      vars: {
        [containerElevation]: tokens[variant].hovered.container.elevation,
        [stateLayerColor]: tokens[variant].hovered.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].hovered.stateLayer.opacity,
      },
    },

    ':active': {
      vars: {
        [containerElevation]: tokens[variant].pressed.container.elevation,
        [stateLayerColor]: tokens[variant].pressed.stateLayer.color,
        [stateLayerOpacity]: tokens[variant].pressed.stateLayer.opacity,
      },
    },
  }) as ComplexStyleRule;

const variants = {
  elevation: {
    default: {},
    lowered: {},
  },
  icon: {
    leading: {},
    trailing: {},
  },
  size: {
    small: {},
    medium: {},
    large: {},
  },
  type: {
    extended: {
      gap: '12px',
      minInlineSize: '80px',
    },
    regular: {},
  },
  variant: {
    surface: getStylesForVariant('surface'),
    primary: getStylesForVariant('primary'),
    secondary: getStylesForVariant('secondary'),
    tertiary: getStylesForVariant('tertiary'),
  },
};

const getStylesForLowerElevation = (variant: StyleVariant) =>
  ({
    vars: {
      [containerColor]: tokens[variant].container.colorLowered,
      [containerElevation]: tokens[variant].container.elevationLowered,
    },

    ':focus-visible': {
      vars: {
        [containerElevation]: tokens[variant].focus.container.elevationLowered,
      },
    },

    ':hover': {
      vars: {
        [containerElevation]: tokens[variant].hovered.container.elevationLowered,
      },
    },

    ':active': {
      vars: {
        [containerElevation]: tokens[variant].pressed.container.elevationLowered,
      },
    },
  }) as ComplexStyleRule;

const compoundVariants: CompoundVariantStyles<VariantOptions<typeof variants>> = [
  /************************************
   * Elevation and Style combinations *
   ************************************/
  {
    variants: {
      elevation: 'lowered',
      variant: 'surface',
    },
    style: getStylesForLowerElevation('surface'),
  },
  {
    variants: {
      elevation: 'lowered',
      variant: 'primary',
    },
    style: getStylesForLowerElevation('primary'),
  },
  {
    variants: {
      elevation: 'lowered',
      variant: 'secondary',
    },
    style: getStylesForLowerElevation('secondary'),
  },
  {
    variants: {
      elevation: 'lowered',
      variant: 'tertiary',
    },
    style: getStylesForLowerElevation('tertiary'),
  },
  /******************************
   * Icon and Type combinations *
   ******************************/
  {
    variants: {
      icon: 'leading',
      type: 'extended',
    },
    style: {
      paddingInlineStart: '16px',
      paddingInlineEnd: '20px',
    },
  },
  {
    variants: {
      icon: 'trailing',
      type: 'extended',
    },
    style: {
      paddingInlineStart: '20px',
      paddingInlineEnd: '16px',
    },
  },
  /******************************
   * Size and Type combinations *
   ******************************/
  {
    variants: {
      size: 'small',
      type: 'regular',
    },
    style: {
      borderRadius: '12px',
      blockSize: '40px',
      inlineSize: '40px',
    },
  },
  {
    variants: {
      size: 'medium',
      type: 'regular',
    },
    style: {
      borderRadius: '16px',
      blockSize: '56px',
      inlineSize: '56px',
    },
  },
  {
    variants: {
      size: 'large',
      type: 'regular',
    },
    style: {
      borderRadius: '28px',
      blockSize: '96px',
      inlineSize: '96px',
    },
  },
  {
    variants: {
      type: 'extended',
    },
    style: {
      borderRadius: '16px',
      blockSize: '56px',
      minInlineSize: '80px',
    },
  },
];

/********************
 * Component Recipe *
 ********************/
const componentRecipe = recipe({
  base,
  compoundVariants,
  variants,
  defaultVariants: {
    elevation: 'default',
    icon: 'leading',
    size: 'medium',
    type: 'regular',
    variant: 'surface',
  },
});

/***********
 * Exports *
 ***********/
const styles = { base, icon };
export { componentRecipe, styles };
