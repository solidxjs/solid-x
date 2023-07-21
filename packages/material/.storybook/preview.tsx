import type { Preview, StoryContext, StoryFn } from 'storybook-solidjs';
import themes from './brandTheme';

const withTheme = (Story: StoryFn, context: StoryContext) => {
  const theme = context.globals['theme'];
  
  if (theme === 'sidebyside' || theme === 'stacked') {
    return (
      <div class={`sx-sb-multi-theme sx-sb-${theme}`}>
        <div>
          <Story />
        </div>
        <div class="sx-dark">
          <Story />
        </div>
      </div>
    );
  }
  
  const themeClass = (theme === 'dark') ? 'sx-dark' : undefined;
  return (
    <div class={themeClass}>
        <Story />
    </div>
  )
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        { value: themes.light.appBg, name: 'light' },
        { value: themes.dark.appBg, name: 'dark' }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: themes.dark
    }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'sun',
        items: [
          { value: 'light', icon: 'sun', title: 'Light (default)' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'sidebyside', icon: 'sidebyside', title: 'Side-by-side' },
          { value: 'stacked', icon: 'stacked', title: 'Stacked' }
        ],
        dynamicTitle: true,
      }
    }
  }
};

export default preview;
