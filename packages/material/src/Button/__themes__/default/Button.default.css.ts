import { createTheme } from '@vanilla-extract/css';
import { sys } from '../../../theme';
import { tokens } from '../Button.tokens.css';

export const defaultTheme = {
  elevated: createTheme(tokens.elevated, {
    container: {
      color: sys.color.surfaceContainer.low,
      elevation: sys.elevation.level1,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow.base,
    },
    label: {
      color: sys.color.primary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.primary.base,
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level2,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
  }),
  filled: createTheme(tokens.filled, {
    container: {
      color: sys.color.primary.base,
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow.base,
    },
    label: {
      color: sys.color.onPrimary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onPrimary.base,
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.onPrimary.base,
      },
      icon: {
        color: sys.color.onPrimary.base,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.onPrimary.base,
      },
      icon: {
        color: sys.color.onPrimary.base,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.onPrimary.base,
      },
      icon: {
        color: sys.color.onPrimary.base,
      },
    },
  }),
  filledTonal: createTheme(tokens.filledTonal, {
    container: {
      color: sys.color.secondary.container,
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow.base,
    },
    label: {
      color: sys.color.onSecondary.container,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onSecondary.container,
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.onSecondary.container,
      },
      icon: {
        color: sys.color.onSecondary.container,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.onSecondary.container,
      },
      icon: {
        color: sys.color.onSecondary.container,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.onSecondary.container,
      },
      icon: {
        color: sys.color.onSecondary.container,
      },
    },
  }),
  outlined: createTheme(tokens.outlined, {
    container: {
      color: 'transparent',
      elevation: sys.elevation.level0,
      outlineColor: sys.color.outline.base,
      outlineWidth: '1px',
      shadowColor: 'transparent',
    },
    label: {
      color: sys.color.primary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.primary.base,
    },
    disabled: {
      container: {
        color: 'transparent',
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: sys.color.onSurface.base,
      },
      label: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.primary.base,
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.outline.base,
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.outline.base,
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
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
      color: sys.color.primary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.primary.base,
    },
    disabled: {
      container: {
        color: 'transparent',
        elevation: sys.elevation.level0,
        opacity: '0',
        outlineColor: 'transparent',
      },
      label: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent',
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      label: {
        color: sys.color.primary.base,
      },
      icon: {
        color: sys.color.primary.base,
      },
    },
  }),
};
