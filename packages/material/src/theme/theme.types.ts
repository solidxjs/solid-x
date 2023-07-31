import type { ComplexStyleRule } from '@vanilla-extract/css';
import type { RuntimeFn } from '@vanilla-extract/recipes';

/**
 * Helper types from @vanilla-extract/recipes
 */
type RecipeStyleRule = ComplexStyleRule | string;
type VariantDefinitions = Record<string, RecipeStyleRule>;

export type StyleGroups = string;
export type VariantGroups = Record<string, VariantDefinitions>;

export type ComponentThemeType<Styles extends StyleGroups, Variants extends VariantGroups> = {
  componentRecipe?: RuntimeFn<Variants>;
  defaultTheme: string | Record<string, string>;
  styles: Record<Styles, string>;
};
