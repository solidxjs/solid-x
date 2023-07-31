import { createContext, useContext } from 'solid-js';
import { ComponentsConfig } from './componentsConfig';

export type ThemeContextValue = {
  components: ComponentsConfig;
};

export const ThemeContext = createContext<ThemeContextValue>({ components: {} });

export function useThemeContext() {
  return useContext(ThemeContext);
}
