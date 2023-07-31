import { Accessor, createMemo } from 'solid-js';
import { ComponentThemeType, StyleGroups, VariantGroups } from './theme.types';

/**
 * Hook to derive the styles from the component theme and variant options.
 *
 * @param theme The theme from which the style classes are to be derived.
 * @param options The variant options for the component.
 */
export function useComponentTheme<
  S extends StyleGroups,
  V extends VariantGroups,
  C extends ComponentThemeType<S, V>,
>(
  theme: C,
  key: keyof C['defaultTheme'] | Accessor<keyof C['defaultTheme']>,
  options: Parameters<NonNullable<C['componentRecipe']>>[0],
) {
  const { componentRecipe, defaultTheme, styles } = theme;

  // Get the default theme class
  const defaultThemeClass = createMemo(() =>
    typeof defaultTheme === 'string'
      ? defaultTheme
      : defaultTheme[(typeof key === 'function' ? key() : key) as string],
  );

  // Get the style class from the recipe
  const recipeClass = createMemo(() => componentRecipe?.(options) ?? '');

  return {
    classes: () => `${defaultThemeClass()} ${recipeClass()}`,
    defaultThemeClass: () => defaultThemeClass(),
    recipeClass: () => recipeClass(),
    styles: () => styles as C['styles'],
  };
}
