import { createTheme } from '@vanilla-extract/css';
import { tokens } from './theme.tokens.css';
import { sys } from '../../theme';

export const baseTheme = createTheme(tokens, {
  filled: {
    container: {
      color: {
        default: sys.color.primary.base,
        selected: sys.color.primary.base,
        unselected: sys.color.surfaceContainer.highest,
      },
      outlineColor: 'transparent',
      outlineWidth: '0px',
    },
    icon: {
      color: {
        default: sys.color.onPrimary.base,
        selected: sys.color.onPrimary.base,
        unselected: sys.color.primary.base,
      },
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onPrimary.base,
          selected: sys.color.onPrimary.base,
          unselected: sys.color.primary.base,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onPrimary.base,
          selected: sys.color.onPrimary.base,
          unselected: sys.color.primary.base,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onPrimary.base,
          selected: sys.color.onPrimary.base,
          unselected: sys.color.primary.base,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onPrimary.base,
          selected: sys.color.onPrimary.base,
          unselected: sys.color.primary.base,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onPrimary.base,
          selected: sys.color.onPrimary.base,
          unselected: sys.color.primary.base,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onPrimary.base,
          selected: sys.color.onPrimary.base,
          unselected: sys.color.primary.base,
        },
      },
    },
  },
  filledTonal: {
    container: {
      color: {
        default: sys.color.secondary.container,
        selected: sys.color.secondary.container,
        unselected: sys.color.surfaceContainer.highest,
      },
      outlineColor: 'transparent',
      outlineWidth: '0px',
    },
    icon: {
      color: {
        default: sys.color.onSecondary.container,
        selected: sys.color.onSecondary.container,
        unselected: sys.color.onSurfaceVariant.base,
      },
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onSecondary.container,
          selected: sys.color.onSecondary.container,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSecondary.container,
          selected: sys.color.onSecondary.container,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onSecondary.container,
          selected: sys.color.onSecondary.container,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSecondary.container,
          selected: sys.color.onSecondary.container,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onSecondary.container,
          selected: sys.color.onSecondary.container,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSecondary.container,
          selected: sys.color.onSecondary.container,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
  },
  outlined: {
    container: {
      color: {
        default: 'transparent',
        selected: sys.color.surface.inverse,
        unselected: 'transparent',
      },
      outlineColor: sys.color.outline.base,
      outlineWidth: '1px',
    },
    icon: {
      color: {
        default: sys.color.onSurfaceVariant.base,
        selected: sys.color.onSurface.inverse,
        unselected: sys.color.onSurfaceVariant.base,
      },
    },
    disabled: {
      container: {
        color: 'transparent',
        opacity: '0.12',
        outlineColor: sys.color.onSurface.base,
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.onSurface.inverse,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.onSurface.inverse,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.onSurface.inverse,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.onSurface.inverse,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.onSurface.inverse,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.onSurface.inverse,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
  },
  standard: {
    container: {
      color: {
        default: 'transparent',
        selected: 'transparent',
        unselected: 'transparent',
      },
      outlineColor: 'transparent',
      outlineWidth: '0px',
    },
    icon: {
      color: {
        default: sys.color.onSurfaceVariant.base,
        selected: sys.color.primary.base,
        unselected: sys.color.onSurfaceVariant.base,
      },
    },
    disabled: {
      container: {
        color: 'transparent',
        opacity: '0',
        outlineColor: 'transparent',
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.primary.base,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.primary.base,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.primary.base,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.primary.base,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.primary.base,
          unselected: sys.color.onSurfaceVariant.base,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant.base,
          selected: sys.color.primary.base,
          unselected: sys.color.onSurfaceVariant.base,
        },
      },
    },
  },
});
