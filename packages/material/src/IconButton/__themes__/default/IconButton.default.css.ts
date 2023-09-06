import { createTheme } from '@vanilla-extract/css';
import { tokens } from '../IconButton.tokens.css';
import { sys } from '../../../theme';

export const defaultTheme = {
  filled: createTheme(tokens.filled, {
    container: {
      color: {
        default: sys.color.primary,
        selected: sys.color.primary,
        unselected: sys.color.surfaceContainerHighest,
      },
      outlineColor: 'transparent',
      outlineWidth: '0px',
    },
    icon: {
      color: {
        default: sys.color.onPrimary,
        selected: sys.color.onPrimary,
        unselected: sys.color.primary,
      },
    },
    disabled: {
      container: {
        color: sys.color.onSurface,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onPrimary,
          selected: sys.color.onPrimary,
          unselected: sys.color.primary,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onPrimary,
          selected: sys.color.onPrimary,
          unselected: sys.color.primary,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onPrimary,
          selected: sys.color.onPrimary,
          unselected: sys.color.primary,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onPrimary,
          selected: sys.color.onPrimary,
          unselected: sys.color.primary,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onPrimary,
          selected: sys.color.onPrimary,
          unselected: sys.color.primary,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onPrimary,
          selected: sys.color.onPrimary,
          unselected: sys.color.primary,
        },
      },
    },
  }),
  filledTonal: createTheme(tokens.filledTonal, {
    container: {
      color: {
        default: sys.color.secondaryContainer,
        selected: sys.color.secondaryContainer,
        unselected: sys.color.surfaceContainerHighest,
      },
      outlineColor: 'transparent',
      outlineWidth: '0px',
    },
    icon: {
      color: {
        default: sys.color.onSecondaryContainer,
        selected: sys.color.onSecondaryContainer,
        unselected: sys.color.onSurfaceVariant,
      },
    },
    disabled: {
      container: {
        color: sys.color.onSurface,
        opacity: '0.12',
        outlineColor: 'transparent',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onSecondaryContainer,
          selected: sys.color.onSecondaryContainer,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSecondaryContainer,
          selected: sys.color.onSecondaryContainer,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onSecondaryContainer,
          selected: sys.color.onSecondaryContainer,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSecondaryContainer,
          selected: sys.color.onSecondaryContainer,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onSecondaryContainer,
          selected: sys.color.onSecondaryContainer,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSecondaryContainer,
          selected: sys.color.onSecondaryContainer,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
  }),
  outlined: createTheme(tokens.outlined, {
    container: {
      color: {
        default: 'transparent',
        selected: sys.color.inverseSurface,
        unselected: 'transparent',
      },
      outlineColor: sys.color.outline,
      outlineWidth: '1px',
    },
    icon: {
      color: {
        default: sys.color.onSurfaceVariant,
        selected: sys.color.onInverseSurface,
        unselected: sys.color.onSurfaceVariant,
      },
    },
    disabled: {
      container: {
        color: 'transparent',
        opacity: '0.12',
        outlineColor: sys.color.onSurface,
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.onInverseSurface,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.onInverseSurface,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.onInverseSurface,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.onInverseSurface,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.onInverseSurface,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.onInverseSurface,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
  }),
  standard: createTheme(tokens.standard, {
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
        default: sys.color.onSurfaceVariant,
        selected: sys.color.primary,
        unselected: sys.color.onSurfaceVariant,
      },
    },
    disabled: {
      container: {
        color: 'transparent',
        opacity: '0',
        outlineColor: 'transparent',
      },
      icon: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focus: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.primary,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.primary,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
    hovered: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.primary,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.primary,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
    pressed: {
      stateLayer: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.primary,
          unselected: sys.color.onSurfaceVariant,
        },
        opacity: sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: {
          default: sys.color.onSurfaceVariant,
          selected: sys.color.primary,
          unselected: sys.color.onSurfaceVariant,
        },
      },
    },
  }),
};
