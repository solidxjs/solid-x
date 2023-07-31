import { ParentComponent } from 'solid-js';
import { ThemeContext, ThemeContextValue } from './theme.context';

export const ThemeProvider: ParentComponent<Partial<ThemeContextValue>> = (props) => (
  <ThemeContext.Provider
    value={{
      components: props.components ?? {},
    }}>
    {props.children}
  </ThemeContext.Provider>
);
