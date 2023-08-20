import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Badge } from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Status/Badge',
  tags: ['autodocs'],
  component: Badge,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['large', 'small'] },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Dot: Story = {
  render: Template,
  args: { children: '3', variant: 'small' },
};

export const StandardOneCharacter: Story = {
  render: Template,
  args: { children: '3', variant: 'large' },
};

export const StandardMultipleCharacters: Story = {
  render: Template,
  args: { children: '999+', variant: 'large' },
};

const CustomThemeTemplate: StoryFn<typeof Badge> = (args) => (
  <ThemeProvider
    components={{
      Badge: {
        small: { color: 'green' },
        large: {
          container: { color: 'green', shape: '2px' },
          label: { color: 'white' },
        },
      },
    }}>
    <Badge {...args} />
  </ThemeProvider>
);

export const CustomThemesBadge: Story = {
  render: CustomThemeTemplate,
  args: { children: '3', variant: 'large' },
};
