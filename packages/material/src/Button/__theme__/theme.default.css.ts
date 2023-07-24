import { createTheme } from '@vanilla-extract/css';
import { tokens } from './theme.tokens.css';
import { sys } from '../../theme';

export const baseTheme = createTheme(tokens, {
  elevated: {
    container: {
      color: sys.color.surfaceContainer.low,
      elevation: sys.elevation.level1,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow.base
    },
    labelText: {
      color: sys.color.primary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight
    },
    icon: {
      color: sys.color.primary.base
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent'
      },
      labelText: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      }
    },
    focus: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    },
    hovered: {
      container: {
        elevation: sys.elevation.level2,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    },
    pressed: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    }
  },
  filled: {
    container: {
      color: sys.color.primary.base,
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow.base
    },
    labelText: {
      color: sys.color.onPrimary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight
    },
    icon: {
      color: sys.color.onPrimary.base
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent'
      },
      labelText: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      }
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity
      },
      labelText: {
        color: sys.color.onPrimary.base
      },
      icon: {
        color: sys.color.onPrimary.base
      }
    },
    hovered: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity
      },
      labelText: {
        color: sys.color.onPrimary.base
      },
      icon: {
        color: sys.color.onPrimary.base
      }
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity
      },
      labelText: {
        color: sys.color.onPrimary.base
      },
      icon: {
        color: sys.color.onPrimary.base
      }
    }
  },
  filledTonal: {
    container: {
      color: sys.color.secondary.container,
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: sys.color.shadow.base
    },
    labelText: {
      color: sys.color.onSecondary.container,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight
    },
    icon: {
      color: sys.color.onSecondary.container
    },
    disabled: {
      container: {
        color: sys.color.onSurface.base,
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: 'transparent'
      },
      labelText: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      }
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.focus.stateLayerOpacity
      },
      labelText: {
        color: sys.color.onSecondary.container
      },
      icon: {
        color: sys.color.onSecondary.container
      }
    },
    hovered: {
      container: {
        elevation: sys.elevation.level1,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.hover.stateLayerOpacity
      },
      labelText: {
        color: sys.color.onSecondary.container
      },
      icon: {
        color: sys.color.onSecondary.container
      }
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.onSecondary.container,
        opacity: sys.state.pressed.stateLayerOpacity
      },
      labelText: {
        color: sys.color.onSecondary.container
      },
      icon: {
        color: sys.color.onSecondary.container
      }
    }
  },
  outlined: {
    container: {
      color: 'transparent',
      elevation: sys.elevation.level0,
      outlineColor: sys.color.outline.base,
      outlineWidth: '1px',
      shadowColor: 'transparent'
    },
    labelText: {
      color: sys.color.primary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight
    },
    icon: {
      color: sys.color.primary.base
    },
    disabled: {
      container: {
        color: 'transparent',
        elevation: sys.elevation.level0,
        opacity: '0.12',
        outlineColor: sys.color.onSurface.base
      },
      labelText: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      }
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.primary.base
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    },
    hovered: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.outline.base
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: sys.color.outline.base
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    }
  },
  text: {
    container: {
      color: 'transparent',
      elevation: sys.elevation.level0,
      outlineColor: 'tranparent',
      outlineWidth: '0px',
      shadowColor: 'transparent'
    },
    labelText: {
      color: sys.color.primary.base,
      font: sys.typescale.label.lg.font,
      lineHeight: sys.typescale.label.lg.lineHeight,
      size: sys.typescale.label.lg.size,
      tracking: sys.typescale.label.lg.tracking,
      weight: sys.typescale.label.lg.weight
    },
    icon: {
      color: sys.color.primary.base
    },
    disabled: {
      container: {
        color: 'transparent',
        elevation: sys.elevation.level0,
        opacity: '0',
        outlineColor: 'transparent'
      },
      labelText: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      },
      icon: {
        color: sys.color.onSurface.base,
        opacity: '0.38'
      }
    },
    focus: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.focus.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    },
    hovered: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.hover.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    },
    pressed: {
      container: {
        elevation: sys.elevation.level0,
        outlineColor: 'transparent'
      },
      stateLayer: {
        color: sys.color.primary.base,
        opacity: sys.state.pressed.stateLayerOpacity
      },
      labelText: {
        color: sys.color.primary.base
      },
      icon: {
        color: sys.color.primary.base
      }
    }
  }
});
