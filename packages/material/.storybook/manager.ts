import { addons } from '@storybook/manager-api';
import themes from './brandTheme';

addons.setConfig({
  theme: themes.dark,
  storySort: {
    method: 'alphabetical',
  },
});
