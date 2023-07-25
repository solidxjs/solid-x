/**
 * Generates sys state tokens.
 *
 * @returns The sys state tokens
 */
const state = () => ({
  dragged: {
    stateLayerOpacity: '0.16',
  },
  focus: {
    stateLayerOpacity: '0.12',
  },
  hover: {
    stateLayerOpacity: '0.08',
  },
  pressed: {
    stateLayerOpacity: '0.12',
  },
});

export default state;
