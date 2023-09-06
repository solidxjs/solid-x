import { createTheme } from '@vanilla-extract/css';
import { tokens } from '../FAB.tokens.css';
import { sys } from '../../../theme';

export const defaultTheme = {
  surface: createTheme(tokens.surface, {
    container: {
      color: sys.color.surfaceContainerHigh,
      colorLowered: sys.color.surfaceContainerLow,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
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
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.primary,
      },
      label: {
        color: sys.color.primary,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.primary,
      },
      label: {
        color: sys.color.primary,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.primary,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.primary,
      },
      label: {
        color: sys.color.primary,
      },
    },
  }),
  primary: createTheme(tokens.primary, {
    container: {
      color: sys.color.primaryContainer,
      colorLowered: sys.color.primaryContainer,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
      shadowColor: sys.color.shadow,
    },
    label: {
      color: sys.color.onPrimaryContainer,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onPrimaryContainer,
    },
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onPrimaryContainer,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onPrimaryContainer,
      },
      label: {
        color: sys.color.onPrimaryContainer,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.onPrimaryContainer,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onPrimaryContainer,
      },
      label: {
        color: sys.color.onPrimaryContainer,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onPrimaryContainer,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onPrimaryContainer,
      },
      label: {
        color: sys.color.onPrimaryContainer,
      },
    },
  }),
  secondary: createTheme(tokens.secondary, {
    container: {
      color: sys.color.secondaryContainer,
      colorLowered: sys.color.secondaryContainer,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
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
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onSecondaryContainer,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onSecondaryContainer,
      },
      label: {
        color: sys.color.onSecondaryContainer,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.onSecondaryContainer,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onSecondaryContainer,
      },
      label: {
        color: sys.color.onSecondaryContainer,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onSecondaryContainer,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onSecondaryContainer,
      },
      label: {
        color: sys.color.onSecondaryContainer,
      },
    },
  }),
  tertiary: createTheme(tokens.tertiary, {
    container: {
      color: sys.color.tertiaryContainer,
      colorLowered: sys.color.tertiaryContainer,
      elevation: sys.elevation.level3,
      elevationLowered: sys.elevation.level1,
      shadowColor: sys.color.shadow,
    },
    label: {
      color: sys.color.onTertiaryContainer,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight,
    },
    icon: {
      color: sys.color.onTertiaryContainer,
    },
    focus: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onTertiaryContainer,
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onTertiaryContainer,
      },
      label: {
        color: sys.color.onTertiaryContainer,
      },
    },
    hovered: {
      container: {
        elevation: sys.elevation.level4,
        elevationLowered: sys.elevation.level2,
      },
      stateLayer: {
        color: sys.color.onTertiaryContainer,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onTertiaryContainer,
      },
      label: {
        color: sys.color.onTertiaryContainer,
      },
    },
    pressed: {
      container: {
        elevation: sys.elevation.level3,
        elevationLowered: sys.elevation.level1,
      },
      stateLayer: {
        color: sys.color.onTertiaryContainer,
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: sys.color.onTertiaryContainer,
      },
      label: {
        color: sys.color.onTertiaryContainer,
      },
    },
  }),
};
