import { createThemeContract } from '@vanilla-extract/css';
import { deepCloneSerializableObject } from '../../utils/object';

const buttonTokens = {
  container: {
    color: null,
    elevation: null,
    outlineColor: null,
    outlineWidth: null,
    shadowColor: null
  },
  labelText: {
    color: null,
    font: null,
    lineHeight: null,
    size: null,
    tracking: null,
    weight: null
  },
  icon: {
    color: null
  },
  disabled: {
    container: {
      color: null,
      elevation: null,
      opacity: null,
      outlineColor: null
    },
    labelText: {
      color: null,
      opacity: null
    },
    icon: {
      color: null,
      opacity: null
    }
  },
  focus: {
    container: {
      outlineColor: null
    },
    stateLayer: {
      color: null,
      elevation: null,
      opacity: null
    },
    labelText: {
      color: null
    },
    icon: {
      color: null
    }
  },
  hovered: {
    container: {
      outlineColor: null
    },
    stateLayer: {
      color: null,
      elevation: null,
      opacity: null
    },
    labelText: {
      color: null
    },
    icon: {
      color: null
    }
  },
  pressed: {
    container: {
      outlineColor: null
    },
    stateLayer: {
      color: null,
      elevation: null,
      opacity: null
    },
    labelText: {
      color: null
    },
    icon: {
      color: null
    }
  }
};

export const tokens = createThemeContract({
  elevated: deepCloneSerializableObject(buttonTokens),
  filled: deepCloneSerializableObject(buttonTokens),
  outlined: deepCloneSerializableObject(buttonTokens),
  text: deepCloneSerializableObject(buttonTokens),
  tonal: deepCloneSerializableObject(buttonTokens)
});
