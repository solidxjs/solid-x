/**
 * Generates sys dark color tokens from the contract.
 *
 * @param ref The theme contract of the ref vars
 * @param sys The theme contract of the sys vars
 * @returns The sys dark color tokens
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const color = (ref: any, sys: any) => ({
  primary: {
    base: ref.palette.primary[80],
    container: ref.palette.primary[30],
    inverse: ref.palette.primary[40]
  },
  onPrimary: {
    base: ref.palette.primary[20],
    container: ref.palette.primary[90]
  },
  secondary: {
    base: ref.palette.secondary[80],
    container: ref.palette.secondary[30]
  },
  onSecondary: {
    base: ref.palette.secondary[20],
    container: ref.palette.secondary[90]
  },
  tertiary: {
    base: ref.palette.tertiary[80],
    container: ref.palette.tertiary[30]
  },
  onTertiary: {
    base: ref.palette.tertiary[20],
    container: ref.palette.tertiary[90]
  },
  error: {
    base: ref.palette.error[80],
    container: ref.palette.error[30]
  },
  onError: {
    base: ref.palette.error[20],
    container: ref.palette.error[90]
  },
  surface: {
    base: ref.palette.neutral[6],
    dim: ref.palette.neutral[6],
    bright: ref.palette.neutral[24],
    inverse: ref.palette.neutral[90],
    tint: sys.color.primary.base
  },
  onSurface: {
    base: ref.palette.neutral[90],
    inverse: ref.palette.neutral[20]
  },
  surfaceContainer: {
    lowest: ref.palette.neutral[4],
    low: ref.palette.neutral[10],
    base: ref.palette.neutral[12],
    high: ref.palette.neutral[17],
    highest: ref.palette.neutral[22]
  },
  surfaceVariant: {
    base: ref.palette.neutral[30]
  },
  onSurfaceVariant: {
    base: ref.palette.neutral[80]
  },
  background: {
    base: ref.palette.neutral[6]
  },
  onBackground: {
    base: ref.palette.neutral[90]
  },
  outline: {
    base: ref.palette.neutralVariant[60]
  },
  outlineVariant: {
    base: ref.palette.neutralVariant[30]
  },
  shadow: {
    base: ref.palette.neutral[0]
  },
  scrim: {
    base: ref.palette.neutral[0]
  }
});

export default color;
