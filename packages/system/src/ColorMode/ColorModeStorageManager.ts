import { ColorMode } from './ColorMode.types';
import { COLOR_MODE_STORAGE_KEY, normalizeColorMode, parseCookie } from './ColorModeUtils';

export type ColorModeStorageManager = {
  /**
   * The type of the storage manager
   */
  type: 'cookie' | 'localStorage';

  /**
   * Retrieves the value for the key from the storage.
   * @param fallback The key whose value needs to be retrieved
   * @returns the value corresponding to the key
   */
  get(fallback?: ColorMode): ColorMode | undefined;

  /**
   * Sets the provided color mode to the storage.
   * @param value The color mode to be set
   */
  set(value: ColorMode): void;
};

/**
 * Creates a localStorage manager for storing/retrieving color modes.
 * @param key The key to be used for storing the color modes in localStorage
 * @returns instance of the storage manager
 */
export const createLocalStorageManager = (
  key = COLOR_MODE_STORAGE_KEY,
): ColorModeStorageManager => ({
  type: 'localStorage',
  get(fallback) {
    // check if running on server
    if (!globalThis?.document) return fallback;
    // document is available, so running on client
    let value: string | undefined;
    try {
      value = localStorage.getItem(key) ?? fallback;
      // don't trust the value from localStorage
      return normalizeColorMode(value, fallback);
    } catch (e) {
      // error reading from the localStorage, return fallback
      return fallback;
    }
  },
  set(value) {
    try {
      localStorage.setItem(key, value);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  },
});

/**
 * Creates a cookie manager for storing/retrieving color modes.
 * @param key The key to be used for storing the color modes in cookie
 * @param cookie An optional cookie string which needs to be used
 * @returns instance of the storage manager
 */
export const createCookieStorageManager = (
  key = COLOR_MODE_STORAGE_KEY,
  cookie?: string,
): ColorModeStorageManager => ({
  type: 'cookie',
  get(fallback) {
    // if running on the server
    if (cookie) {
      const value = parseCookie(cookie, key);
      return normalizeColorMode(value);
    }
    // check if running on server and no cookie is provided
    // return the fallback
    if (!globalThis?.document) return fallback;
    // document is available, so running on client
    let value: string | undefined;
    try {
      value = parseCookie(document.cookie, key) ?? fallback;
      // don't trust the value from localStorage
      return normalizeColorMode(value, fallback);
    } catch (e) {
      // error reading from the localStorage, return fallback
      return fallback;
    }
  },
  set(value) {
    try {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  },
});

export const defaultLocalStorageManager = createLocalStorageManager();
export const defaultCookieStorageManager = createCookieStorageManager();
