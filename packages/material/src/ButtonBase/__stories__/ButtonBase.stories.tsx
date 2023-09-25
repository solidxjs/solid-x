import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import { ButtonBase } from '../ButtonBase';
import { ComponentProps } from 'solid-js';

const meta: Meta<typeof ButtonBase> = {
  title: 'Controls/ButtonBase',
  component: ButtonBase,
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
  },
};
export default meta;

type Story = StoryObj<typeof ButtonBase>;

const Template: StoryFn<typeof ButtonBase> = (args: ComponentProps<typeof ButtonBase>) => {
  return <ButtonBase {...args} />;
};

export const Basic: Story = {
  render: Template,
  args: {
    children: 'Button',
  },
};
