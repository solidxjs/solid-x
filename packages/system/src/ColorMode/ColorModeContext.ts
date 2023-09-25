import { Accessor, createContext, useContext } from 'solid-js';
import { ColorMode, ResolvedColorMode } from './ColorMode.types';

export type ColorModeContextProps = {
  colorMode: Accessor<ColorMode>;
  resolvedColorMode: Accessor<ResolvedColorMode>;
  toggleColorMode: () => void;
  setColorMode: (value: ColorMode) => void;
};

export const ColorModeContext = createContext<ColorModeContextProps>();

/**
 * Retrieves the color mode context value.
 * @returns The context value
 * @throws Error if the context provider is not available
 */
export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('[solid-x]: useColorMode must be used within a ColorModeProvider');
  }
  return context;
}
