!(function () {
  try {
    const init = '${init}';
    const key = '${key}';

    // eslint-disable-next-line no-inner-declarations
    function apply(value) {
      const query = '(prefers-color-scheme: dark)';
      const system = window.matchMedia(query).matches ? 'dark' : 'light';
      const _value = value === 'system' ? system : value;
      const root = document.documentElement;

      root.style.colorScheme = _value;
      root.dataset.sxTheme = _value;

      return value;
    }

    const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
    const stored = cookie ? cookie[2] : null;

    if (stored) {
      apply(stored);
    } else {
      document.cookie = `${key}=${apply(init)}; max-age=31536000; path=/`;
    }
  } catch (err) {
    /* empty */
  }
})();
