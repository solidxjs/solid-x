import { createThemeContract } from '@vanilla-extract/css';
import { deepCloneSerializableObject } from '../../utils/object';

const iconButtonTokens = {
  container: {
    color: {
      default: null,
      selected: null,
      unselected: null,
    },
    outlineColor: null,
    outlineWidth: null,
  },
  icon: {
    color: {
      default: null,
      selected: null,
      unselected: null,
    },
  },
  disabled: {
    container: {
      color: null,
      opacity: null,
      outlineColor: null,
    },
    icon: {
      color: null,
      opacity: null,
    },
  },
  focus: {
    stateLayer: {
      color: {
        default: null,
        selected: null,
        unselected: null,
      },
      opacity: null,
    },
    icon: {
      color: {
        default: null,
        selected: null,
        unselected: null,
      },
    },
  },
  hovered: {
    stateLayer: {
      color: {
        default: null,
        selected: null,
        unselected: null,
      },
      opacity: null,
    },
    icon: {
      color: {
        default: null,
        selected: null,
        unselected: null,
      },
    },
  },
  pressed: {
    stateLayer: {
      color: {
        default: null,
        selected: null,
        unselected: null,
      },
      opacity: null,
    },
    icon: {
      color: {
        default: null,
        selected: null,
        unselected: null,
      },
    },
  },
};

export const tokens = createThemeContract({
  filled: deepCloneSerializableObject(iconButtonTokens),
  filledTonal: deepCloneSerializableObject(iconButtonTokens),
  outlined: deepCloneSerializableObject(iconButtonTokens),
  standard: deepCloneSerializableObject(iconButtonTokens),
});
