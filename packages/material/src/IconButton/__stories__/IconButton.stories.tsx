import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import IconButton from '../IconButton';
import { ComponentProps } from 'solid-js';
import { DemoIcon } from './DemoIcon';
import { FilledDemoIcon } from './FilledDemoIcon';

const meta: Meta<typeof IconButton> = {
  title: 'Controls/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    ariaExpanded: { control: 'text' },
    ariaHasPopup: { control: 'text' },
    ariaLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    onAction: { action: 'onAction' },
    onSelectionChange: { action: 'onSelectionChange' },
    selected: { control: 'boolean' },
    toggle: { control: 'boolean' },
    target: { control: 'text' },
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'outlined', 'text', 'filledTonal'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args: ComponentProps<typeof IconButton>) => (
  <IconButton {...args} />
);

export const FilledButton: Story = {
  render: Template,
  args: {
    children: <DemoIcon height="24px" width="24px" />,
    selectedIcon: <FilledDemoIcon height="24px" width="24px" />,
    variant: 'filled',
  },
};

export const FilledTonalButton: Story = {
  render: Template,
  args: {
    children: <DemoIcon height="24px" width="24px" />,
    selectedIcon: <FilledDemoIcon height="24px" width="24px" />,
    variant: 'filledTonal',
  },
};

export const OutlinedButton: Story = {
  render: Template,
  args: {
    children: <DemoIcon height="24px" width="24px" />,
    selectedIcon: <FilledDemoIcon height="24px" width="24px" />,
    variant: 'outlined',
  },
};

export const StandardButton: Story = {
  render: Template,
  args: {
    children: <DemoIcon height="24px" width="24px" />,
    selectedIcon: <FilledDemoIcon height="24px" width="24px" />,
    variant: 'standard',
  },
};
