/**
 * Generates sys color tokens from the contract.
 *
 * @param ref The theme contract of the ref vars
 * @returns The sys color tokens
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const color = (ref: any) => ({
  primary: ref.palette.primary[40],
  onPrimary: ref.palette.primary[100],
  primaryContainer: ref.palette.primary[90],
  onPrimaryContainer: ref.palette.primary[10],
  inversePrimary: ref.palette.primary[80],
  secondary: ref.palette.secondary[40],
  onSecondary: ref.palette.secondary[100],
  secondaryContainer: ref.palette.secondary[90],
  onSecondaryContainer: ref.palette.secondary[10],
  tertiary: ref.palette.tertiary[40],
  onTertiary: ref.palette.tertiary[100],
  tertiaryContainer: ref.palette.tertiary[90],
  onTertiaryContainer: ref.palette.tertiary[10],
  error: ref.palette.error[40],
  onError: ref.palette.error[100],
  errorContainer: ref.palette.error[90],
  onErrorContainer: ref.palette.error[10],
  surface: ref.palette.neutral[98],
  surfaceDim: ref.palette.neutral[87],
  surfaceBright: ref.palette.neutral[98],
  surfaceContainerLowest: ref.palette.neutral[100],
  surfaceContainerLow: ref.palette.neutral[96],
  surfaceContainer: ref.palette.neutral[94],
  surfaceContainerHigh: ref.palette.neutral[92],
  surfaceContainerHighest: ref.palette.neutral[90],
  onSurface: ref.palette.neutral[10],
  surfaceVariant: ref.palette.neutral[90],
  onSurfaceVariant: ref.palette.neutral[30],
  surfaceTint: ref.palette.primary[40],
  inverseSurface: ref.palette.neutral[20],
  onInverseSurface: ref.palette.neutral[95],
  background: ref.palette.neutral[98],
  onBackground: ref.palette.neutral[10],
  outline: ref.palette.neutralVariant[50],
  outlineVariant: ref.palette.neutralVariant[80],
  shadow: ref.palette.neutral[0],
  scrim: ref.palette.neutral[0],
});

export default color;
