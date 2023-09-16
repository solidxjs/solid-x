import { createVar, fallbackVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { CompoundVariantStyles, VariantOptions } from '../../utils/theme';
import { tokens } from './TextField.tokens.css';

/****************
 * Private Vars *
 ****************/
const containerColor = createVar();
const containerOpacity = createVar();
const containerShape = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();
const leadingContentColor = createVar();
const leadingContentOpacity = createVar();
const labelColor = createVar();
const labelOpacity = createVar();
const labelFont = createVar();
const labelLineHeight = createVar();
const labelSize = createVar();
const labelWeight = createVar();
const labelTracking = createVar();
const populatedLabelLineHeight = createVar();
const trailingContentColor = createVar();
const trailingContentOpacity = createVar();
const activeIndicatorColor = createVar();
const activeIndicatorHeight = createVar();
const activeIndicatorOpacity = createVar();
const caretColor = createVar();
const inputTextColor = createVar();
const inputTextOpacity = createVar();
const inputTextFont = createVar();
const inputTextLineHeight = createVar();
const inputTextSize = createVar();
const inputTextWeight = createVar();
const inputTextTracking = createVar();
const supportingTextColor = createVar();
const supportingTextOpacity = createVar();
const supportingTextFont = createVar();
const supportingTextLineHeight = createVar();
const supportingTextSize = createVar();
const supportingTextWeight = createVar();
const supportingTextTracking = createVar();
const placeholderTextColor = createVar();
const prefixColor = createVar();
const suffixColor = createVar();

/********************
 * Component Styles *
 ********************/
const base = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderRadius: containerShape,
  overflow: 'hidden',
});

const fieldContainer = style({
  display: 'flex',
  position: 'relative',
});

const backgroundLayer = style({
  inset: 0,
  position: 'absolute',
  background: containerColor,
  opacity: fallbackVar(containerOpacity, '1'),
});

const stateLayer = style({
  inset: 0,
  position: 'absolute',
  background: stateLayerColor,
  opacity: fallbackVar(stateLayerOpacity, '0'),
});

const activeIndicator = style({
  background: activeIndicatorColor,
  height: activeIndicatorHeight,
  opacity: fallbackVar(activeIndicatorOpacity, '1'),
  width: '100%',
  position: 'absolute',
  inset: 'auto 0 0 0',
});

const content = style({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
});

const sideContent = style({
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '48px',
});

const leadingContent = style({
  paddingInlineEnd: '4px',
  color: leadingContentColor,
  opacity: fallbackVar(leadingContentOpacity, '1'),
});

const trailingContent = style({
  paddingInlineStart: '4px',
  color: trailingContentColor,
  opacity: fallbackVar(trailingContentOpacity, '1'),
});

const mainContent = style({
  flex: '1 1 0%',
  paddingTop: `calc(8px + ${populatedLabelLineHeight})`,
  paddingBottom: '8px',

  selectors: {
    '[data-sx-with-leading="false"] &': {
      paddingInlineStart: '16px',
    },
    '[data-sx-with-trailing="false"] &': {
      paddingInlineEnd: '16px',
    },
  },
});

const label = style({
  position: 'absolute',
  font: labelFont,
  fontSize: labelSize,
  fontWeight: labelWeight,
  letterSpacing: labelTracking,
  lineHeight: labelLineHeight,
  color: labelColor,
  opacity: fallbackVar(labelOpacity, '1'),
  translate: '0 -50%',
  top: '50%',
  transition: '200ms',

  selectors: {
    [`[data-sx-populated="true"] &, ${base}:focus-within &`]: {
      translate: '0 0',
      top: '8px',
    },
  },
});

const inputWrapper = style({
  display: 'flex',
  flex: '1 1 0%',
});

const input = style({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  width: '100%',
  padding: 0,
  font: inputTextFont,
  fontSize: inputTextSize,
  fontWeight: inputTextWeight,
  letterSpacing: inputTextTracking,
  lineHeight: inputTextLineHeight,
  color: inputTextColor,
  caretColor: caretColor,
  opacity: fallbackVar(inputTextOpacity, '1'),

  '::placeholder': {
    color: placeholderTextColor,
  },
});

const affix = style({
  font: inputTextFont,
  fontSize: inputTextSize,
  fontWeight: inputTextWeight,
  letterSpacing: inputTextTracking,
  lineHeight: inputTextLineHeight,

  selectors: {
    '[data-sx-populated="false"]:not(:focus-within) &': {
      opacity: 0,
    },
  },
});

const prefix = style({
  color: prefixColor,
  paddingInlineEnd: '2px',
});

const suffix = style({
  color: suffixColor,
  paddingInlineStart: '2px',
});

const supportingText = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
  paddingInline: '16px',
  paddingTop: '4px',
  font: supportingTextFont,
  fontSize: supportingTextSize,
  fontWeight: supportingTextWeight,
  letterSpacing: supportingTextTracking,
  lineHeight: supportingTextLineHeight,
  color: supportingTextColor,
  opacity: fallbackVar(supportingTextOpacity, '1'),
});

const counter = style({
  flexShrink: 1,
});

/**********************
 * Component Variants *
 **********************/
const variants = {
  variant: {
    filled: {
      vars: {
        [containerColor]: tokens.filled.container.color,
        [containerOpacity]: '1',
        [containerShape]: tokens.filled.container.shape,
        [labelFont]: tokens.filled.label.empty.font,
        [labelLineHeight]: tokens.filled.label.empty.lineHeight,
        [labelSize]: tokens.filled.label.empty.size,
        [labelWeight]: tokens.filled.label.empty.weight,
        [labelTracking]: tokens.filled.label.empty.tracking,
        [populatedLabelLineHeight]: tokens.filled.label.populated.lineHeight,
        [inputTextFont]: tokens.filled.inputText.font,
        [inputTextLineHeight]: tokens.filled.inputText.lineHeight,
        [inputTextSize]: tokens.filled.inputText.size,
        [inputTextWeight]: tokens.filled.inputText.weight,
        [inputTextTracking]: tokens.filled.inputText.tracking,
        [supportingTextFont]: tokens.filled.supportingText.font,
        [supportingTextLineHeight]: tokens.filled.supportingText.lineHeight,
        [supportingTextSize]: tokens.filled.supportingText.size,
        [supportingTextWeight]: tokens.filled.supportingText.weight,
        [supportingTextTracking]: tokens.filled.supportingText.tracking,
        [placeholderTextColor]: tokens.filled.placeholderText.color,
        [prefixColor]: tokens.filled.prefix.color,
        [suffixColor]: tokens.filled.suffix.color,
      },

      selectors: {
        // Label styling
        '&[data-sx-populated="true"]': {
          vars: {
            [labelFont]: tokens.filled.label.populated.font,
            [labelLineHeight]: tokens.filled.label.populated.lineHeight,
            [labelSize]: tokens.filled.label.populated.size,
            [labelWeight]: tokens.filled.label.populated.weight,
            [labelTracking]: tokens.filled.label.populated.tracking,
          },
        },
      },

      ':focus-within': {
        vars: {
          // Label styling
          [labelFont]: tokens.filled.label.populated.font,
          [labelLineHeight]: tokens.filled.label.populated.lineHeight,
          [labelSize]: tokens.filled.label.populated.size,
          [labelWeight]: tokens.filled.label.populated.weight,
          [labelTracking]: tokens.filled.label.populated.tracking,
        },
      },
    },
  },
  status: {
    default: {},
    error: {},
  },
  state: {
    enabled: {},
    disabled: {
      vars: {
        [containerColor]: tokens.filled.disabled.container.color,
        [containerOpacity]: tokens.filled.disabled.container.opacity,
        [leadingContentColor]: tokens.filled.disabled.leadingContent.color,
        [leadingContentOpacity]: tokens.filled.disabled.leadingContent.opacity,
        [labelColor]: tokens.filled.disabled.label.color,
        [labelOpacity]: tokens.filled.disabled.label.opacity,
        [trailingContentColor]: tokens.filled.disabled.trailingContent.color,
        [trailingContentOpacity]: tokens.filled.disabled.trailingContent.opacity,
        [activeIndicatorColor]: tokens.filled.disabled.activeIndicator.color,
        [activeIndicatorOpacity]: tokens.filled.disabled.activeIndicator.opacity,
        [activeIndicatorHeight]: tokens.filled.disabled.activeIndicator.height,
        [inputTextColor]: tokens.filled.disabled.inputText.color,
        [inputTextOpacity]: tokens.filled.disabled.inputText.opacity,
        [supportingTextColor]: tokens.filled.disabled.supportingText.color,
        [supportingTextOpacity]: tokens.filled.disabled.supportingText.opacity,
      },
      pointerEvents: 'none' as const,
    },
  },
};

const compoundVariants: CompoundVariantStyles<VariantOptions<typeof variants>> = [
  /***********************************
   * 'filled' and Status combinations *
   ***********************************/
  {
    variants: {
      state: 'enabled',
      status: 'default',
      variant: 'filled',
    },
    style: {
      vars: {
        [leadingContentColor]: tokens.filled.leadingContent.color,
        [labelColor]: tokens.filled.label.color,
        [trailingContentColor]: tokens.filled.trailingContent.color,
        [activeIndicatorColor]: tokens.filled.activeIndicator.color,
        [activeIndicatorHeight]: tokens.filled.activeIndicator.height,
        [caretColor]: tokens.filled.caret.color,
        [inputTextColor]: tokens.filled.inputText.color,
        [supportingTextColor]: tokens.filled.supportingText.color,
      },

      // Pseudo elements need to be defined in the following order
      // :hover < :focus < :disabled

      ':hover': {
        vars: {
          [stateLayerColor]: tokens.filled.hovered.stateLayer.color,
          [stateLayerOpacity]: tokens.filled.hovered.stateLayer.opacity,
          [leadingContentColor]: tokens.filled.hovered.leadingContent.color,
          [labelColor]: tokens.filled.hovered.label.color,
          [trailingContentColor]: tokens.filled.hovered.trailingContent.color,
          [activeIndicatorColor]: tokens.filled.hovered.activeIndicator.color,
          [activeIndicatorHeight]: tokens.filled.hovered.activeIndicator.height,
          [inputTextColor]: tokens.filled.hovered.inputText.color,
          [supportingTextColor]: tokens.filled.hovered.supportingText.color,
        },
      },

      ':focus-within': {
        vars: {
          [leadingContentColor]: tokens.filled.focused.leadingContent.color,
          [labelColor]: tokens.filled.focused.label.color,
          [trailingContentColor]: tokens.filled.focused.trailingContent.color,
          [activeIndicatorColor]: tokens.filled.focused.activeIndicator.color,
          [activeIndicatorHeight]: tokens.filled.focused.activeIndicator.height,
          [activeIndicatorHeight]: tokens.filled.focused.activeIndicator.height,
          [inputTextColor]: tokens.filled.focused.inputText.color,
          [supportingTextColor]: tokens.filled.focused.supportingText.color,
        },
      },
    },
  },
  {
    variants: {
      state: 'enabled',
      status: 'error',
      variant: 'filled',
    },
    style: {
      vars: {
        [leadingContentColor]: tokens.filled.error.leadingContent.color,
        [labelColor]: tokens.filled.error.label.color,
        [trailingContentColor]: tokens.filled.error.trailingContent.color,
        [activeIndicatorColor]: tokens.filled.error.activeIndicator.color,
        [activeIndicatorHeight]: tokens.filled.error.activeIndicator.height,
        [caretColor]: tokens.filled.error.caret.color,
        [inputTextColor]: tokens.filled.error.inputText.color,
        [supportingTextColor]: tokens.filled.error.supportingText.color,
      },

      // Pseudo elements need to be defined in the following order
      // :hover < :focus < :disabled

      ':hover': {
        vars: {
          [stateLayerColor]: tokens.filled.error.hovered.stateLayer.color,
          [stateLayerOpacity]: tokens.filled.error.hovered.stateLayer.opacity,
          [leadingContentColor]: tokens.filled.error.hovered.leadingContent.color,
          [labelColor]: tokens.filled.error.hovered.label.color,
          [trailingContentColor]: tokens.filled.error.hovered.trailingContent.color,
          [activeIndicatorColor]: tokens.filled.error.hovered.activeIndicator.color,
          [activeIndicatorHeight]: tokens.filled.error.hovered.activeIndicator.height,
          [inputTextColor]: tokens.filled.error.hovered.inputText.color,
          [supportingTextColor]: tokens.filled.error.hovered.supportingText.color,
        },
      },

      ':focus-within': {
        vars: {
          [leadingContentColor]: tokens.filled.error.focused.leadingContent.color,
          [labelColor]: tokens.filled.error.focused.label.color,
          [trailingContentColor]: tokens.filled.error.focused.trailingContent.color,
          [activeIndicatorColor]: tokens.filled.error.focused.activeIndicator.color,
          [activeIndicatorHeight]: tokens.filled.error.focused.activeIndicator.height,
          [inputTextColor]: tokens.filled.error.focused.inputText.color,
          [supportingTextColor]: tokens.filled.error.focused.supportingText.color,
        },
      },
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
    status: 'default',
    variant: 'filled',
  },
});

/***********
 * Exports *
 ***********/
const styles = {
  base,
  activeIndicator,
  affix,
  backgroundLayer,
  content,
  counter,
  fieldContainer,
  input,
  inputWrapper,
  leadingContent,
  label,
  mainContent,
  prefix,
  sideContent,
  stateLayer,
  suffix,
  supportingText,
  trailingContent,
};
export { componentRecipe, styles };
