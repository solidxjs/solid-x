import { Accessor, createMemo } from 'solid-js';
import { ComponentThemeType } from './theme.types';
import { useThemeContext } from './theme.context';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * Hook to derive the styles from the component theme and variant options.
 *
 * @param theme The theme from which the style classes are to be derived.
 * @param options The variant options for the component.
 */
export function useComponentTheme<C extends ComponentThemeType>(
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

  // Get custom theme overrides from ThemeContext
  const customTheme = useThemeContext().components[theme.componentName];
  let customThemeStyles: Record<string, string> = {};
  if (customTheme) {
    const varMap = createVarMap(customTheme, theme.tokens);
    customThemeStyles = assignInlineVars(varMap);
  }

  return {
    classes: () => `${defaultThemeClass()} ${recipeClass()}`,
    customThemeStyles: () => customThemeStyles,
    defaultThemeClass: () => defaultThemeClass(),
    recipeClass: () => recipeClass(),
    styles: () => styles as C['styles'],
  };
}

/**
 * Creates a var map based on the component tokens and custom theme
 * values.
 *
 * @param values The custom theme values
 * @param tokens The component theme tokens
 * @returns The var map for the custom theme values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createVarMap(values: Record<string, any>, tokens: Record<string, any>) {
  const flatValues = flattenObject(values);
  const flatTokens = flattenObject(tokens);
  const result: Record<string, string> = {};
  for (const key in flatValues) {
    // All the keys in the value will match the tokens. The check is done in the type
    // level. But, just to be safe, we will be doing the check in runtime too.
    if (key in flatTokens) {
      result[flatTokens[key]] = flatValues[key];
    }
  }
  return result;
}

/**
 * Given a nested object, this will flatten out the object with concatenated
 * keys.
 *
 * @param obj The nested object to be flattened
 * @param parent The parent key
 * @param result The result obj
 * @returns The flattened object
 */
function flattenObject(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>,
  parent?: string,
  result: Record<string, string> = {},
) {
  for (const key in obj) {
    const propName = parent ? `${parent}_${key}` : key;
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      flattenObject(obj[key], propName, result);
    } else {
      result[propName] = obj[key];
    }
  }
  return result;
}
