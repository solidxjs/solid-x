/**
 * Generates sys shape tokens.
 *
 * @returns The sys shape tokens
 */
const shape = () => ({
  corner: {
    none: '0px',
    xs: {
      full: '4px',
      top: '4px 4px 0px 0px',
    },
    sm: {
      full: '8px',
    },
    md: {
      full: '12px',
    },
    lg: {
      end: '0px 16px 16px 0px',
      full: '16px',
      top: '16px 16px 0px 0px',
    },
    xl: {
      full: '28px',
      top: '28px 28px 0px 0px',
    },
    full: '9999px',
  },
});

export default shape;
