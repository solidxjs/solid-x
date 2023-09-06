import { createTheme } from '@vanilla-extract/css';
import { sys } from '../../../theme';
import { tokens } from '../Button.tokens.css';

export const defaultTheme = {
  elevated: createTheme(tokens.elevated, {
    container: {
      color: sys.color.surfaceContainerLow,
      elevation: sys.elevation.level1,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow,
    },
    label: {
      color: sys.color.primary,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.primary,
    },
    disabled: {
      container: {
        color: sys.color.onSurface,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level2,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
  }),
  filled: createTheme(tokens.filled, {
    container: {
      color: sys.color.primary,
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow,
    },
    label: {
      color: sys.color.onPrimary,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onPrimary,
    },
    disabled: {
      container: {
        color: sys.color.onSurface,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.onPrimary,
      },
      icon: {
        color: sys.color.onPrimary,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.onPrimary,
      },
      icon: {
        color: sys.color.onPrimary,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.onPrimary,
      },
      icon: {
        color: sys.color.onPrimary,
      },
    },
  }),
  filledTonal: createTheme(tokens.filledTonal, {
    container: {
      color: sys.color.secondaryContainer,
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow,
    },
    label: {
      color: sys.color.onSecondaryContainer,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onSecondaryContainer,
    },
    disabled: {
      container: {
        color: sys.color.onSurface,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.onSecondaryContainer,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.onSecondaryContainer,
      },
      icon: {
        color: sys.color.onSecondaryContainer,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.onSecondaryContainer,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.onSecondaryContainer,
      },
      icon: {
        color: sys.color.onSecondaryContainer,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.onSecondaryContainer,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.onSecondaryContainer,
      },
      icon: {
        color: sys.color.onSecondaryContainer,
      },
    },
  }),
  outlined: createTheme(tokens.outlined, {
    container: {
      color: 'transparent',
      elevation: sys.elevation.level0,
      outlineColor: sys.color.outline,
      outlineWidth: '1px',
      shadowColor: 'transparent',
    },
    label: {
      color: sys.color.primary,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.primary,
    },
    disabled: {
      container: {
        color: 'transparent',
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: sys.color.onSurface,
      },
      label: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.primary,
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.outline,
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.outline,
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
  }),
  text: createTheme(tokens.text, {
    container: {
      color: 'transparent',
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: 'transparent',
    },
    label: {
      color: sys.color.primary,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.primary,
    },
    disabled: {
      container: {
        color: 'transparent',
        elevation: sys.elevation.level0,
        opacity: '0',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary,
      },
      icon: {
        color: sys.color.primary,
      },
    },
  }),
};
