import { createTheme } from '@vanilla-extract/css';
import { tokens } from '../FAB.tokens.css';
import { sys } from '../../../theme';

export const defaultTheme = {
  surface: createTheme(tokens.surface, {
    container: {
      color: sys.color.surfaceContainer.high,
      colorLowered: sys.color.surfaceContainer.low,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
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
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.primary.base,
      },
      label: {
        color: sys.color.primary.base,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.primary.base,
      },
      label: {
        color: sys.color.primary.base,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.primary.base,
      },
      label: {
        color: sys.color.primary.base,
      },
    },
  }),
  primary: createTheme(tokens.primary, {
    container: {
      color: sys.color.primary.container,
      colorLowered: sys.color.primary.container,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
      shadowColor: sys.color.shadow.base,
    },
    label: {
      color: sys.color.onPrimary.container,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onPrimary.container,
    },
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onPrimary.container,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onPrimary.container,
      },
      label: {
        color: sys.color.onPrimary.container,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.onPrimary.container,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onPrimary.container,
      },
      label: {
        color: sys.color.onPrimary.container,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onPrimary.container,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onPrimary.container,
      },
      label: {
        color: sys.color.onPrimary.container,
      },
    },
  }),
  secondary: createTheme(tokens.secondary, {
    container: {
      color: sys.color.secondary.container,
      colorLowered: sys.color.secondary.container,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
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
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onSecondary.container,
      },
      label: {
        color: sys.color.onSecondary.container,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onSecondary.container,
      },
      label: {
        color: sys.color.onSecondary.container,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onSecondary.container,
      },
      label: {
        color: sys.color.onSecondary.container,
      },
    },
  }),
  tertiary: createTheme(tokens.tertiary, {
    container: {
      color: sys.color.tertiary.container,
      colorLowered: sys.color.tertiary.container,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
      shadowColor: sys.color.shadow.base,
    },
    label: {
      color: sys.color.onTertiary.container,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onTertiary.container,
    },
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onTertiary.container,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onTertiary.container,
      },
      label: {
        color: sys.color.onTertiary.container,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.onTertiary.container,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onTertiary.container,
      },
      label: {
        color: sys.color.onTertiary.container,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onTertiary.container,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onTertiary.container,
      },
      label: {
        color: sys.color.onTertiary.container,
      },
    },
  }),
};
