import { addons } from '@storybook/manager-api';
import themes from './brandTheme';

addons.setConfig({
  theme: themes.dark,
  showToolbar: true,
  showPanel: true,
  storySort: {
    method: 'alphabetical',
  },
});
