import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import Button from '../ButtonBase';
import { ComponentProps } from 'solid-js';

const meta: Meta<typeof Button> = {
  title: 'Controls/ButtonBase',
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
    type: { control: 'select', options: ['submit', 'reset'] }
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ComponentProps<typeof Button>) => {
  console.log(args.disabled);
  return <Button {...args} />;
};

export const Basic: Story = {
  render: Template,
  args: {
    children: 'Button'
  }
};
