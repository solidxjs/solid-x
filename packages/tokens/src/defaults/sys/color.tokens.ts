/**
 * Generates sys color tokens from the contract.
 *
 * @param ref The theme contract of the ref vars
 * @param sys The theme contract of the sys vars
 * @returns The sys color tokens
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const color = (ref: any, sys: any) => ({
  primary: {
    base: ref.palette.primary[40],
    container: ref.palette.primary[90],
    inverse: ref.palette.primary[80],
  },
  onPrimary: {
    base: ref.palette.primary[100],
    container: ref.palette.primary[10],
  },
  secondary: {
    base: ref.palette.secondary[40],
    container: ref.palette.secondary[90],
  },
  onSecondary: {
    base: ref.palette.secondary[100],
    container: ref.palette.secondary[10],
  },
  tertiary: {
    base: ref.palette.tertiary[40],
    container: ref.palette.tertiary[90],
  },
  onTertiary: {
    base: ref.palette.tertiary[100],
    container: ref.palette.tertiary[10],
  },
  error: {
    base: ref.palette.error[40],
    container: ref.palette.error[90],
  },
  onError: {
    base: ref.palette.error[100],
    container: ref.palette.error[10],
  },
  surface: {
    base: ref.palette.neutral[98],
    dim: ref.palette.neutral[87],
    bright: ref.palette.neutral[98],
    inverse: ref.palette.neutral[20],
    tint: sys.color.primary.base,
  },
  onSurface: {
    base: ref.palette.neutral[10],
    inverse: ref.palette.neutral[95],
  },
  surfaceContainer: {
    lowest: ref.palette.neutral[100],
    low: ref.palette.neutral[96],
    base: ref.palette.neutral[94],
    high: ref.palette.neutral[92],
    highest: ref.palette.neutral[90],
  },
  surfaceVariant: {
    base: ref.palette.neutral[90],
  },
  onSurfaceVariant: {
    base: ref.palette.neutral[30],
  },
  background: {
    base: ref.palette.neutral[98],
  },
  onBackground: {
    base: ref.palette.neutral[10],
  },
  outline: {
    base: ref.palette.neutralVariant[50],
  },
  outlineVariant: {
    base: ref.palette.neutralVariant[80],
  },
  shadow: {
    base: ref.palette.neutral[0],
  },
  scrim: {
    base: ref.palette.neutral[0],
  },
});

export default color;
