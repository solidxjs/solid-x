import { FlowProps, createEffect, createSignal, onCleanup } from 'solid-js';
import { isServer } from 'solid-js/web';
import { ColorMode, ResolvedColorMode } from './ColorMode.types';
import { ColorModeContext, ColorModeContextProps } from './ColorModeContext';
import { ColorModeStorageManager, defaultLocalStorageManager } from './ColorModeStorageManager';
import { addColorModeListener, getSystemColorMode } from './ColorModeUtils';

const FALLBACK_COLOR_MODE: ColorMode = 'system';
const FALLBACK_RESOLVED_COLOR_MODE: ResolvedColorMode = 'light';

type ColorModeProviderProps = FlowProps<{
  /**
   * The default color mode
   */
  defaultValue?: ColorMode;

  /**
   * The storage manager to be used for storing the color mode
   */
  colorModeManager?: ColorModeStorageManager;
}>;

/**
 * The ColorModeProvider for providing the color mode values to the child components.
 */
export const ColorModeProvider = (props: ColorModeProviderProps) => {
  const colorModeManager = () => props.colorModeManager ?? defaultLocalStorageManager;
  const defaultColorMode = () => props.defaultValue ?? FALLBACK_COLOR_MODE;
  let mediaListenerCleanup: (() => unknown) | undefined;

  // eslint-disable-next-line solid/reactivity
  const [colorMode, _setColorMode] = createSignal(getInitialColorMode(colorModeManager()));
  const [resolvedColorMode, _setResolvedColorMode] = createSignal(
    // eslint-disable-next-line solid/reactivity
    getInitialResolvedColorMode(colorModeManager()),
  );

  const applyColorMode = (value: ResolvedColorMode, rawValue?: ColorMode) => {
    _setColorMode(rawValue ?? value);
    _setResolvedColorMode(value);
    document.documentElement.dataset['sxTheme'] = value;
    document.documentElement.style.colorScheme = value;
  };

  const setColorMode = (value: ColorMode) => {
    mediaListenerCleanup?.();
    mediaListenerCleanup = undefined;

    const isSystem = value === 'system';
    applyColorMode(isSystem ? getSystemColorMode() : value, value);
    colorModeManager().set(value);

    if (isSystem) {
      mediaListenerCleanup = addColorModeListener(applyColorMode);
    }
  };

  const toggleColorMode = () => {
    setColorMode(colorMode() === 'dark' ? 'light' : 'dark');
  };

  createEffect(() => {
    setColorMode(colorModeManager().get() ?? defaultColorMode());
    onCleanup(() => mediaListenerCleanup?.());
  });

  const context: ColorModeContextProps = {
    colorMode,
    resolvedColorMode,
    setColorMode,
    toggleColorMode,
  };

  return <ColorModeContext.Provider value={context} children={props.children} />;
};

function getInitialColorMode(manager: ColorModeStorageManager) {
  return manager.get() ?? FALLBACK_COLOR_MODE;
}

function getInitialResolvedColorMode(manager: ColorModeStorageManager) {
  const colorModeFromManager = manager.get() ?? FALLBACK_COLOR_MODE;

  // cannot resolve system in server, so return the resolved fallback
  if (isServer && colorModeFromManager === 'system') {
    return FALLBACK_RESOLVED_COLOR_MODE;
  }

  return colorModeFromManager === 'system' ? getSystemColorMode() : colorModeFromManager;
}
