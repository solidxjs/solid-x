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

    const stored = localStorage.getItem(key);

    if (stored) {
      apply(stored);
    } else {
      localStorage.setItem(key, apply(init));
    }
  } catch (err) {
    /* empty */
  }
})();
