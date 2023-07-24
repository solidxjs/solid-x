import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import Button from '../Button';
import { ComponentProps } from 'solid-js';
import { DemoIcon } from './DemoIcon';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    ariaExpanded: { control: 'text' },
    ariaHasPopup: { control: 'text' },
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    onAction: { action: 'onAction' },
    target: { control: 'text' },
    type: { control: 'select', options: ['submit', 'reset'] },
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'outlined', 'text', 'filledTonal']
    }
  }
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

export const FilledTonalButton: Story = {
  render: Template,
  args: {
    children: 'Filled Tonal',
    variant: 'filledTonal'
  }
};

export const OutlinedButton: Story = {
  render: Template,
  args: {
    children: 'Outlined',
    variant: 'outlined'
  }
};

export const TextButton: Story = {
  render: Template,
  args: {
    children: 'Text',
    variant: 'text'
  }
};

export const LeadingIconButton: Story = {
  render: Template,
  args: {
    children: 'Elevated',
    icon: <DemoIcon height="18px" width="18px" />,
    iconPosition: 'leading',
    variant: 'elevated'
  }
};

export const TrailingIconButton: Story = {
  render: Template,
  args: {
    children: 'Elevated',
    icon: <DemoIcon height="18px" width="18px" />,
    iconPosition: 'trailing',
    variant: 'elevated'
  }
};
