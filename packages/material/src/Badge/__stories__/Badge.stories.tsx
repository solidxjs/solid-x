import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import Badge from '../Badge';
import { ComponentProps } from 'solid-js';

const meta: Meta<typeof Badge> = {
  title: 'Status/Badge',
  tags: ['autodocs'],
  component: Badge,
  argTypes: {
    children: { control: 'string' },
    variant: { control: 'select', options: ['large', 'small'] },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args: ComponentProps<typeof Badge>) => <Badge {...args} />;

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
