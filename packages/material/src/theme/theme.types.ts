import type { ComplexStyleRule } from '@vanilla-extract/css';
import type { RuntimeFn } from '@vanilla-extract/recipes';
import type { ComponentsConfig } from './componentsConfig';

/**
 * Helper types from @vanilla-extract/recipes
 */
type RecipeStyleRule = ComplexStyleRule | string;
type VariantDefinitions = Record<string, RecipeStyleRule>;

type Components = keyof ComponentsConfig;

export type StyleGroups = Record<string, string>;
export type VariantGroups = Record<string, VariantDefinitions>;

export type ComponentThemeType<
  Styles extends StyleGroups = StyleGroups,
  Variants extends VariantGroups = VariantGroups,
> = {
  componentName: Components;
  componentRecipe?: RuntimeFn<Variants>;
  defaultTheme: string | Record<string, string>;
  styles: Styles;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokens: Record<string, any>;
};
