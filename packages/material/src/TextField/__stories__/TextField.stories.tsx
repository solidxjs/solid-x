import { ComponentProps } from 'solid-js';
import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import { TextField } from '../TextField';
import { DemoClearIcon } from './DemoClearIcon';
import { DemoSearchIcon } from './DemoSearchIcon';
import { IconButton } from '../..';

const meta: Meta<typeof TextField> = {
  title: 'Forms/TextField',
  tags: ['autodocs'],
  component: TextField,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args: ComponentProps<typeof TextField>) => (
  <TextField {...args} />
);

export const Basic: Story = {
  render: Template,
  args: {
    label: 'Text field',
    prefixText: '$',
    suffixText: 'Mil',
    leadingContent: <DemoSearchIcon height="24px" width="24px" />,
    trailingContent: (
      <IconButton>
        <DemoClearIcon height="24px" width="24px" />
      </IconButton>
    ),
    supportingText: 'Supporting text',
    minLength: 3,
    maxLength: 10,
    status: 'error',
    readonly: true,
  },
};
