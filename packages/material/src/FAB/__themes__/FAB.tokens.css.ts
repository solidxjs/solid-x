import { createThemeContract } from '@vanilla-extract/css';
import { deepCloneSerializableObject } from '../../utils/object';

const fabTokens = {
  container: {
    color: null,
    colorLowered: null,
    elevation: null,
    elevationLowered: null,
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
  focus: {
    container: {
      elevation: null,
      elevationLowered: null,
    },
    stateLayer: {
      color: null,
      opacity: null,
    },
    icon: {
      color: null,
    },
    label: {
      color: null,
    },
  },
  hovered: {
    container: {
      elevation: null,
      elevationLowered: null,
    },
    stateLayer: {
      color: null,
      opacity: null,
    },
    icon: {
      color: null,
    },
    label: {
      color: null,
    },
  },
  pressed: {
    container: {
      elevation: null,
      elevationLowered: null,
    },
    stateLayer: {
      color: null,
      opacity: null,
    },
    icon: {
      color: null,
    },
    label: {
      color: null,
    },
  },
};

export const tokens = createThemeContract({
  surface: deepCloneSerializableObject(fabTokens),
  primary: deepCloneSerializableObject(fabTokens),
  secondary: deepCloneSerializableObject(fabTokens),
  tertiary: deepCloneSerializableObject(fabTokens),
});
