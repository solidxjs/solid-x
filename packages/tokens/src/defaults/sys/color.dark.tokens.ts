/**
 * Generates sys dark color tokens from the contract.
 *
 * @param ref The theme contract of the ref vars
 * @returns The sys dark color tokens
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const color = (ref: any) => ({
  primary: ref.palette.primary[80],
  onPrimary: ref.palette.primary[20],
  primaryContainer: ref.palette.primary[30],
  onPrimaryContainer: ref.palette.primary[90],
  inversePrimary: ref.palette.primary[40],
  secondary: ref.palette.secondary[80],
  onSecondary: ref.palette.secondary[20],
  secondaryContainer: ref.palette.secondary[30],
  onSecondaryContainer: ref.palette.secondary[90],
  tertiary: ref.palette.tertiary[80],
  onTertiary: ref.palette.tertiary[20],
  tertiaryContainer: ref.palette.tertiary[30],
  onTertiaryContainer: ref.palette.tertiary[90],
  error: ref.palette.error[80],
  onError: ref.palette.error[20],
  errorContainer: ref.palette.error[30],
  onErrorContainer: ref.palette.error[90],
  surface: ref.palette.neutral[6],
  surfaceDim: ref.palette.neutral[6],
  surfaceBright: ref.palette.neutral[24],
  surfaceContainerLowest: ref.palette.neutral[4],
  surfaceContainerLow: ref.palette.neutral[10],
  surfaceContainer: ref.palette.neutral[12],
  surfaceContainerHigh: ref.palette.neutral[17],
  surfaceContainerHighest: ref.palette.neutral[22],
  onSurface: ref.palette.neutral[90],
  surfaceVariant: ref.palette.neutral[30],
  onSurfaceVariant: ref.palette.neutral[80],
  surfaceTint: ref.palette.primary[80],
  inverseSurface: ref.palette.neutral[90],
  onInverseSurface: ref.palette.neutral[20],
  background: ref.palette.neutral[6],
  onBackground: ref.palette.neutral[90],
  outline: ref.palette.neutralVariant[60],
  outlineVariant: ref.palette.neutralVariant[30],
  shadow: ref.palette.neutral[0],
  scrim: ref.palette.neutral[0],
});

export default color;
