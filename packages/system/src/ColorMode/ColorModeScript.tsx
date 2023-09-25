import { createMemo, mergeProps } from 'solid-js';
import cookieStorage from './cookieStorage.js?inject';
import localStorage from './localStorage.js?inject';
import { COLOR_MODE_STORAGE_KEY, normalizeColorMode } from './ColorModeUtils';
import { ColorMode } from '.';

export type ColorModeScriptProps = {
  /**
   * Specifies where the color mode is stored
   * @default 'localStorage'
   */
  type?: 'localStorage' | 'cookie';

  /**
   * Specifies initial color mode.
   * @default 'system'
   */
  initialColorMode?: ColorMode;

  /**
   * Specifies the default key where the value is stored.
   * @default 'solid-x-color-mode'
   */
  storageKey?: string;

  /**
   * nonce for the script tag
   */
  nonce?: string;
};

export const ColorModeScript = (_props: ColorModeScriptProps) => {
  const props = mergeProps(
    {
      storageKey: COLOR_MODE_STORAGE_KEY,
      type: 'localStorage',
      initialColorMode: 'system',
    } as ColorModeScriptProps,
    _props,
  );

  const scriptSrc = createMemo(() => {
    const initialColorMode = normalizeColorMode(props.initialColorMode, 'system');
    const cookieStorageScript = cookieStorage
      .replace(/\$\{init\}/g, initialColorMode)
      .replace(/\$\{key\}/g, props.storageKey!)
      .trim();
    const localStorageScript = localStorage
      .replace(/\$\{init\}/g, initialColorMode)
      .replace(/\$\{key\}/g, props.storageKey!)
      .trim();
    return props.type === 'cookie' ? cookieStorageScript : localStorageScript;
  });

  // eslint-disable-next-line solid/no-innerhtml
  return <script id="sx-color-mode-script" nonce={props.nonce} innerHTML={scriptSrc()} />;
};
