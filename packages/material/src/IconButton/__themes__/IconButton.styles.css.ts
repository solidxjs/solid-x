import { ComplexStyleRule, createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sys } from '../../theme';
import { CompoundVariantStyles, VariantOptions } from '../../utils/theme';
import { tokens } from './IconButton.tokens.css';

/****************
 * Private Vars *
 ****************/
const containerColor = createVar();
const containerOpacity = createVar();
const iconColor = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();
const outlineColor = createVar();
const outlineWidth = createVar();

/***************************
 * Component Variant types *
 ***************************/
type SelectionVariant = 'default' | 'selected' | 'unselected';
type StyleVariant = 'filled' | 'filledTonal' | 'outlined' | 'standard';

/********************
 * Component Styles *
 ********************/
const base = style({
  blockSize: '40px',
  borderRadius: sys.shape.corner.full,
  inlineSize: '40px',

  // Overridable properties
  color: iconColor,

  // use ::before for container
  '::before': {
    borderStyle: 'solid',

    // Overridable properties
    background: containerColor,
    borderColor: outlineColor,
    borderWidth: outlineWidth,
    opacity: containerOpacity,
  },

  // use ::after for state layer
  '::after': {
    // Overridable properties
    background: stateLayerColor,
    opacity: stateLayerOpacity,
  },
});

/**********************
 * Component Variants *
 **********************/
const getStylesForVariant = (variant: StyleVariant) =>
  ({
    vars: {
      [containerColor]: tokens[variant].container.color.default,
      [containerOpacity]: '1',
      [iconColor]: tokens[variant].icon.color.default,
      [stateLayerColor]: 'transparent',
      [stateLayerOpacity]: '0',
      [outlineColor]: tokens[variant].container.outlineColor,
      [outlineWidth]: tokens[variant].container.outlineWidth,
    },

    // Pseudo elements need to be defined in the following order
    // :focus < :hover < :active < :disabled

    ':focus-visible': {
      vars: {
        [iconColor]: tokens[variant].focus.icon.color.default,
        [stateLayerColor]: tokens[variant].focus.stateLayer.color.default,
        [stateLayerOpacity]: tokens[variant].focus.stateLayer.opacity,
      },
    },

    ':hover': {
      vars: {
        [iconColor]: tokens[variant].hovered.icon.color.default,
        [stateLayerColor]: tokens[variant].hovered.stateLayer.color.default,
        [stateLayerOpacity]: tokens[variant].hovered.stateLayer.opacity,
      },
    },

    ':active': {
      vars: {
        [iconColor]: tokens[variant].pressed.icon.color.default,
        [stateLayerColor]: tokens[variant].pressed.stateLayer.color.default,
        [stateLayerOpacity]: tokens[variant].pressed.stateLayer.opacity,
      },
    },

    ':disabled': {
      vars: {
        [containerColor]: tokens[variant].disabled.container.color,
        [containerOpacity]: tokens[variant].disabled.container.opacity,
        [iconColor]: tokens[variant].disabled.icon.color,
        [outlineColor]: tokens[variant].disabled.container.outlineColor,
      },
    },
  } as const);

const variants = {
  variant: {
    filled: getStylesForVariant('filled'),
    filledTonal: getStylesForVariant('filledTonal'),
    outlined: getStylesForVariant('outlined'),
    standard: getStylesForVariant('standard'),
  },
  selection: {
    default: {},
    selected: {},
    unselected: {},
  },
};

const getSelectedStylesForVariant = (selection: SelectionVariant, variant: StyleVariant) =>
  ({
    vars: {
      [containerColor]: tokens[variant].container.color[selection],
      [iconColor]: tokens[variant].icon.color[selection],
    },

    ':focus-visible': {
      vars: {
        [iconColor]: tokens[variant].focus.icon.color[selection],
        [stateLayerColor]: tokens[variant].focus.stateLayer.color[selection],
      },
    },

    ':hover': {
      vars: {
        [iconColor]: tokens[variant].hovered.icon.color[selection],
        [stateLayerColor]: tokens[variant].hovered.stateLayer.color[selection],
      },
    },

    ':active': {
      vars: {
        [iconColor]: tokens[variant].pressed.icon.color[selection],
        [stateLayerColor]: tokens[variant].pressed.stateLayer.color[selection],
      },
    },
  } as ComplexStyleRule);

const compoundVariants: CompoundVariantStyles<VariantOptions<typeof variants>> = [
  /************************************
   * Selection and Style combinations *
   ************************************/
  {
    variants: {
      selection: 'selected',
      variant: 'filled',
    },
    style: getSelectedStylesForVariant('selected', 'filled'),
  },
  {
    variants: {
      selection: 'unselected',
      variant: 'filled',
    },
    style: getSelectedStylesForVariant('unselected', 'filled'),
  },
  {
    variants: {
      selection: 'selected',
      variant: 'filledTonal',
    },
    style: getSelectedStylesForVariant('selected', 'filledTonal'),
  },
  {
    variants: {
      selection: 'unselected',
      variant: 'filledTonal',
    },
    style: getSelectedStylesForVariant('unselected', 'filledTonal'),
  },
  {
    variants: {
      selection: 'selected',
      variant: 'outlined',
    },
    style: getSelectedStylesForVariant('selected', 'outlined'),
  },
  {
    variants: {
      selection: 'unselected',
      variant: 'outlined',
    },
    style: getSelectedStylesForVariant('unselected', 'outlined'),
  },
  {
    variants: {
      selection: 'selected',
      variant: 'standard',
    },
    style: getSelectedStylesForVariant('selected', 'standard'),
  },
  {
    variants: {
      selection: 'unselected',
      variant: 'standard',
    },
    style: getSelectedStylesForVariant('unselected', 'standard'),
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
    selection: 'default',
    variant: 'standard',
  },
});

/***********
 * Exports *
 ***********/
const styles = { base };
export { componentRecipe, styles };
