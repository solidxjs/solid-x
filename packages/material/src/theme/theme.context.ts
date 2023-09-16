import { createContext, useContext } from 'solid-js';
import { ComponentsConfig } from './components.types';

export type ThemeContextValue = {
  components: ComponentsConfig;
};

export const ThemeContext = createContext<ThemeContextValue>({ components: {} });

export function useThemeContext() {
  return useContext(ThemeContext);
}
