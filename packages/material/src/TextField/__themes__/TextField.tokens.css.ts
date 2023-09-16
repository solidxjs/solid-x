import { createThemeContract } from '@vanilla-extract/css';
import { deepCloneSerializableObject } from '../../utils/object';

const statelessTokens = {
  activeIndicator: {
    color: null,
    height: null,
  },
  caret: {
    color: null,
  },
  container: {
    color: null,
    shape: null,
  },
  inputText: {
    color: null,
    font: null,
    lineHeight: null,
    size: null,
    tracking: null,
    weight: null,
  },
  label: {
    color: null,
    empty: {
      font: null,
      lineHeight: null,
      size: null,
      tracking: null,
      weight: null,
    },
    populated: {
      font: null,
      lineHeight: null,
      size: null,
      tracking: null,
      weight: null,
    },
  },
  leadingContent: {
    color: null,
  },
  placeholderText: {
    color: null,
  },
  prefix: {
    color: null,
  },
  suffix: {
    color: null,
  },
  supportingText: {
    color: null,
    font: null,
    lineHeight: null,
    size: null,
    tracking: null,
    weight: null,
  },
  trailingContent: {
    color: null,
  },
};

const statefulTokens = {
  activeIndicator: {
    color: null,
    height: null,
  },
  inputText: {
    color: null,
  },
  label: {
    color: null,
  },
  leadingContent: {
    color: null,
  },
  supportingText: {
    color: null,
  },
  trailingContent: {
    color: null,
  },
};

const textFieldTokens = {
  ...statelessTokens,
  disabled: {
    activeIndicator: {
      color: null,
      height: null,
      opacity: null,
    },
    container: {
      color: null,
      opacity: null,
    },
    inputText: {
      color: null,
      opacity: null,
    },
    label: {
      color: null,
      opacity: null,
    },
    leadingContent: {
      color: null,
      opacity: null,
    },
    supportingText: {
      color: null,
      opacity: null,
    },
    trailingContent: {
      color: null,
      opacity: null,
    },
  },
  focused: deepCloneSerializableObject(statefulTokens),
  hovered: deepCloneSerializableObject({
    ...statefulTokens,
    stateLayer: {
      color: null,
      opacity: null,
    },
  }),
  error: {
    ...statefulTokens,
    caret: {
      color: null,
    },
    focused: deepCloneSerializableObject(statefulTokens),
    hovered: deepCloneSerializableObject({
      ...statefulTokens,
      stateLayer: {
        color: null,
        opacity: null,
      },
    }),
  },
};

export const tokens = createThemeContract({
  filled: deepCloneSerializableObject(textFieldTokens),
});
