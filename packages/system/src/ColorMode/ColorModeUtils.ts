import { ColorMode, ResolvedColorMode } from './ColorMode.types';

const VALID_COLOR_MODES = new Set(['dark', 'light', 'system']);
export const COLOR_MODE_STORAGE_KEY = 'solid-x-color-mode';

/**
 * Normalizes the color mode value to make sure things don't break in the runtime
 * @param value The value to be tested
 * @param fallback The fallback value if the provided value is not valid
 * @returns The normalized valid color mode value
 */
export function normalizeColorMode(value?: string, fallback: ColorMode = 'system') {
  if (VALID_COLOR_MODES.has(value ?? '')) return value as ColorMode;
  return fallback;
}

/**
 * Retrieves the value from the cookie
 * @param cookie The cookie string
 * @param key The key whose value needs to be retrieved
 * @returns The cookie value
 */
export function parseCookie(cookie: string, key: string): string | undefined {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match?.[2];
}

/**
 * Gets the color scheme based on the system preferences.
 * @return the light or dark scheme based on the system preferences.
 */
export function getSystemColorMode() {
  return isMediaPreferenceDark() ? 'dark' : 'light';
}

/**
 * Adds a listener to the color mode changes.
 * @param listener The listener to be called on color mode changes
 * @returns cleanup function
 */
export function addColorModeListener(listener: (value: ResolvedColorMode) => unknown) {
  const matchMedia = getDarkPreferenceMediaQuery();
  const onMediaChange = (event: MediaQueryListEvent) => {
    listener(event.matches ? 'dark' : 'light');
  };
  matchMedia.addEventListener('change', onMediaChange);
  return () => matchMedia.removeEventListener('change', onMediaChange);
}

function getDarkPreferenceMediaQuery() {
  return window.matchMedia('(prefers-color-scheme: dark)');
}

function isMediaPreferenceDark() {
  return getDarkPreferenceMediaQuery().matches;
}
