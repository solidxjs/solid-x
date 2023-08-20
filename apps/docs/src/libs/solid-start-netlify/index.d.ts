type SolidStartNetlifyOptions = {
  /**
   * @default false
   */
  edge?: boolean;
};

declare module 'solid-start-netlify' {
  function adapter(options?: SolidStartNetlifyOptions): import('solid-start/vite').Adapter;
  export = adapter;
}
