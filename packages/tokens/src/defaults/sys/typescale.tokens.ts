/**
 * Generates sys typescale tokens from the contract.
 *
 * @param ref The theme contract of the ref vars
 * @returns The sys typescale tokens
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typescale = (ref: any) => ({
  body: {
    sm: {
      font: ref.typeface.plain,
      lineHeight: '1rem',
      size: '0.75rem',
      tracking: '0.025rem',
      weight: ref.typeface.weight.regular,
    },
    md: {
      font: ref.typeface.plain,
      lineHeight: '1.25rem',
      size: '0.875rem',
      tracking: '0.016rem',
      weight: ref.typeface.weight.regular,
    },
    lg: {
      font: ref.typeface.plain,
      lineHeight: '1.5rem',
      size: '1rem',
      tracking: '0.031rem',
      weight: ref.typeface.weight.regular,
    },
  },
  display: {
    sm: {
      font: ref.typeface.brand,
      lineHeight: '2.75rem',
      size: '2.25rem',
      tracking: '0rem',
      weight: ref.typeface.weight.regular,
    },
    md: {
      font: ref.typeface.brand,
      lineHeight: '3.25rem',
      size: '2.812rem',
      tracking: '0rem',
      weight: ref.typeface.weight.regular,
    },
    lg: {
      font: ref.typeface.brand,
      lineHeight: '4rem',
      size: '3.562rem',
      tracking: '-0.016rem',
      weight: ref.typeface.weight.regular,
    },
  },
  headline: {
    sm: {
      font: ref.typeface.brand,
      lineHeight: '2rem',
      size: '1.5rem',
      tracking: '0rem',
      weight: ref.typeface.weight.regular,
    },
    md: {
      font: ref.typeface.brand,
      lineHeight: '2.25rem',
      size: '1.75rem',
      tracking: '0rem',
      weight: ref.typeface.weight.regular,
    },
    lg: {
      font: ref.typeface.brand,
      lineHeight: '2.5rem',
      size: '2rem',
      tracking: '0rem',
      weight: ref.typeface.weight.regular,
    },
  },
  label: {
    sm: {
      font: ref.typeface.plain,
      lineHeight: '1rem',
      size: '0.688rem',
      tracking: '0.031rem',
      weight: ref.typeface.weight.medium,
    },
    md: {
      font: ref.typeface.plain,
      lineHeight: '1rem',
      size: '0.75rem',
      tracking: '0.031rem',
      weight: ref.typeface.weight.medium,
    },
    lg: {
      font: ref.typeface.plain,
      lineHeight: '1.25rem',
      size: '0.875rem',
      tracking: '0.006rem',
      weight: ref.typeface.weight.medium,
    },
  },
  title: {
    sm: {
      font: ref.typeface.plain,
      lineHeight: '1.25rem',
      size: '0.875rem',
      tracking: '0.006rem',
      weight: ref.typeface.weight.medium,
    },
    md: {
      font: ref.typeface.plain,
      lineHeight: '1.5rem',
      size: '1rem',
      tracking: '0.009rem',
      weight: ref.typeface.weight.medium,
    },
    lg: {
      font: ref.typeface.brand,
      lineHeight: '1.75rem',
      size: '1.375rem',
      tracking: '0rem',
      weight: ref.typeface.weight.regular,
    },
  },
});

export default typescale;
