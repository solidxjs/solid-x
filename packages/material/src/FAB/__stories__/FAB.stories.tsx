import { Meta, StoryFn, StoryObj } from 'storybook-solidjs';
import FAB from '../FAB';
import { ComponentProps } from 'solid-js';
import { DemoIcon } from './DemoIcon';

const meta: Meta<typeof FAB> = {
  title: 'Controls/FAB',
  component: FAB,
  tags: ['autodocs'],
  argTypes: {
    ariaExpanded: { control: 'text' },
    ariaHasPopup: { control: 'text' },
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
    onAction: { action: 'onAction' },
    variant: { control: 'select', options: ['surface', 'primary', 'secondary', 'tertiary'] },
  },
};
export default meta;

type Story = StoryObj<typeof FAB>;

const Template: StoryFn<typeof FAB> = (args: ComponentProps<typeof FAB>) => {
  return <FAB {...args} />;
};

export const SurfaceFAB: Story = {
  render: Template,
  args: {
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'surface',
  },
};

export const PrimaryFAB: Story = {
  render: Template,
  args: {
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'primary',
  },
};

export const SecondaryFAB: Story = {
  render: Template,
  args: {
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'secondary',
  },
};

export const TertiaryFAB: Story = {
  render: Template,
  args: {
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'tertiary',
  },
};

export const SmallFAB: Story = {
  render: Template,
  args: {
    icon: <DemoIcon height="24px" width="24px" />,
    size: 'small',
    variant: 'primary',
  },
};

export const LargeFAB: Story = {
  render: Template,
  args: {
    icon: <DemoIcon height="36px" width="36px" />,
    size: 'large',
    variant: 'primary',
  },
};

export const SurfaceExtendedFAB: Story = {
  render: Template,
  args: {
    children: 'Surface',
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'surface',
  },
};

export const PrimaryExtendedFAB: Story = {
  render: Template,
  args: {
    children: 'Primary',
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'primary',
  },
};

export const SecondaryExtendedFAB: Story = {
  render: Template,
  args: {
    children: 'Secondary',
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'secondary',
  },
};

export const TertiaryExtendedFAB: Story = {
  render: Template,
  args: {
    children: 'Tertiary',
    icon: <DemoIcon height="24px" width="24px" />,
    variant: 'tertiary',
  },
};
