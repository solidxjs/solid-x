import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import Button from '../Button';
import { ComponentProps } from 'solid-js';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ComponentProps<typeof Button>) => (
  <Button {...args} />
);

export const ElevatedButton: Story = {
  render: Template,
  args: {
    children: 'Elevated',
    variant: 'elevated'
  }
};

export const FilledButton: Story = {
  render: Template,
  args: {
    children: 'Filled',
    variant: 'filled'
  }
};

export const OutlinedButton: Story = {
  render: Template,
  args: {
    children: 'Outlined',
    variant: 'outlined'
  }
};

export const TonalButton: Story = {
  render: Template,
  args: {
    children: 'Tonal',
    variant: 'tonal'
  }
};

export const TextButton: Story = {
  render: Template,
  args: {
    children: 'Text',
    variant: 'text'
  }
};
