import { createTheme } from '@vanilla-extract/css';
import { tokens } from '../TextField.tokens.css';
import { sys } from '../../../theme';

export const defaultTheme = {
  filled: createTheme(tokens.filled, {
    activeIndicator: {
      color: sys.color.onSurfaceVariant,
      height: '1px',
    },
    caret: {
      color: sys.color.primary,
    },
    container: {
      color: sys.color.surfaceVariant,
      shape: sys.shape.corner.xs.top,
    },
    inputText: {
      color: sys.color.onSurface,
      font: sys.typescale.body.lg.font,
      lineHeight: sys.typescale.body.lg.lineHeight,
      size: sys.typescale.body.lg.size,
      tracking: sys.typescale.body.lg.tracking,
      weight: sys.typescale.body.lg.weight,
    },
    label: {
      color: sys.color.onSurfaceVariant,
      empty: {
        font: sys.typescale.body.lg.font,
        lineHeight: sys.typescale.body.lg.lineHeight,
        size: sys.typescale.body.lg.size,
        tracking: sys.typescale.body.lg.tracking,
        weight: sys.typescale.body.lg.weight,
      },
      populated: {
        font: sys.typescale.body.sm.font,
        lineHeight: sys.typescale.body.sm.lineHeight,
        size: sys.typescale.body.sm.size,
        tracking: sys.typescale.body.sm.tracking,
        weight: sys.typescale.body.sm.weight,
      },
    },
    leadingContent: {
      color: sys.color.onSurfaceVariant,
    },
    placeholderText: {
      color: sys.color.onSurfaceVariant,
    },
    prefix: {
      color: sys.color.onSurfaceVariant,
    },
    suffix: {
      color: sys.color.onSurfaceVariant,
    },
    supportingText: {
      color: sys.color.onSurfaceVariant,
      font: sys.typescale.body.sm.font,
      lineHeight: sys.typescale.body.sm.lineHeight,
      size: sys.typescale.body.sm.size,
      tracking: sys.typescale.body.sm.tracking,
      weight: sys.typescale.body.sm.weight,
    },
    trailingContent: {
      color: sys.color.onSurfaceVariant,
    },
    disabled: {
      activeIndicator: {
        color: sys.color.onSurface,
        height: '1px',
        opacity: '0.38',
      },
      container: {
        color: sys.color.onSurface,
        opacity: '0.04',
      },
      inputText: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      label: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      leadingContent: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      supportingText: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
      trailingContent: {
        color: sys.color.onSurface,
        opacity: '0.38',
      },
    },
    focused: {
      activeIndicator: {
        color: sys.color.primary,
        height: '2px',
      },
      inputText: {
        color: sys.color.onSurface,
      },
      label: {
        color: sys.color.primary,
      },
      leadingContent: {
        color: sys.color.onSurfaceVariant,
      },
      supportingText: {
        color: sys.color.onSurfaceVariant,
      },
      trailingContent: {
        color: sys.color.onSurfaceVariant,
      },
    },
    hovered: {
      activeIndicator: {
        color: sys.color.onSurface,
        height: '1px',
      },
      inputText: {
        color: sys.color.onSurface,
      },
      label: {
        color: sys.color.onSurfaceVariant,
      },
      leadingContent: {
        color: sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: sys.color.onSurface,
        opacity: sys.state.hover.stateLayerOpacity,
      },
      supportingText: {
        color: sys.color.onSurfaceVariant,
      },
      trailingContent: {
        color: sys.color.onSurfaceVariant,
      },
    },
    error: {
      activeIndicator: {
        color: sys.color.error,
        height: '1px',
      },
      caret: {
        color: sys.color.error,
      },
      inputText: {
        color: sys.color.onSurface,
      },
      label: {
        color: sys.color.error,
      },
      leadingContent: {
        color: sys.color.onSurfaceVariant,
      },
      supportingText: {
        color: sys.color.error,
      },
      trailingContent: {
        color: sys.color.error,
      },
      focused: {
        activeIndicator: {
          color: sys.color.error,
          height: '2px',
        },
        inputText: {
          color: sys.color.onSurface,
        },
        label: {
          color: sys.color.error,
        },
        leadingContent: {
          color: sys.color.onSurfaceVariant,
        },
        supportingText: {
          color: sys.color.error,
        },
        trailingContent: {
          color: sys.color.error,
        },
      },
      hovered: {
        activeIndicator: {
          color: sys.color.onErrorContainer,
          height: '1px',
        },
        inputText: {
          color: sys.color.onSurface,
        },
        label: {
          color: sys.color.onErrorContainer,
        },
        leadingContent: {
          color: sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: sys.color.onSurface,
          opacity: sys.state.hover.stateLayerOpacity,
        },
        supportingText: {
          color: sys.color.error,
        },
        trailingContent: {
          color: sys.color.onErrorContainer,
        },
      },
    },
  }),
};
