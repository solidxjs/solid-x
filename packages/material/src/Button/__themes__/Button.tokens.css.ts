import { createThemeContract } from '@vanilla-extract/css';
import { deepCloneSerializableObject } from '../../utils/object';

const buttonTokens = {
  container: {
    color: null,
    elevation: null,
    outlineColor: null,
    outlineWidth: null,
    shadowColor: null,
  },
  label: {
    color: null,
    font: null,
    lineHeight: null,
    size: null,
    tracking: null,
    weight: null,
  },
  icon: {
    color: null,
  },
  disabled: {
    container: {
      color: null,
      elevation: null,
      opacity: null,
      outlineColor: null,
    },
    label: {
      color: null,
      opacity: null,
    },
    icon: {
      color: null,
      opacity: null,
    },
  },
  focus: {
    container: {
      elevation: null,
      outlineColor: null,
    },
    stateLayer: {
      color: null,
      opacity: null,
    },
    label: {
      color: null,
    },
    icon: {
      color: null,
    },
  },
  hovered: {
    container: {
      elevation: null,
      outlineColor: null,
    },
    stateLayer: {
      color: null,
      opacity: null,
    },
    label: {
      color: null,
    },
    icon: {
      color: null,
    },
  },
  pressed: {
    container: {
      elevation: null,
      outlineColor: null,
    },
    stateLayer: {
      color: null,
      opacity: null,
    },
    label: {
      color: null,
    },
    icon: {
      color: null,
    },
  },
};

export const tokens = createThemeContract({
  elevated: deepCloneSerializableObject(buttonTokens),
  filled: deepCloneSerializableObject(buttonTokens),
  filledTonal: deepCloneSerializableObject(buttonTokens),
  outlined: deepCloneSerializableObject(buttonTokens),
  text: deepCloneSerializableObject(buttonTokens),
});
