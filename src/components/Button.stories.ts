import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '@/components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    text: {
      table: {
        disable: true,
      },
    },
    childrenType: {
      table: {
        disable: true,
      },
    },
    iconName: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
    disabled: { control: { type: 'radio' }, options: [true, false] },
  },
  args: { onClick: fn(() => alert('테스트')) },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  argTypes: {},
  args: {
    text: 'test',
  },
};

export const LeftIcon: Story = {
  argTypes: {},
  args: {
    text: 'test',
    iconName: 'heart',
    childrenType: 'leftIcon',
  },
};

export const RightIcon: Story = {
  argTypes: {},
  args: {
    text: 'test',
    iconName: 'heart',
    childrenType: 'rightIcon',
  },
};

export const IconOnly: Story = {
  argTypes: {},
  args: {
    iconName: 'heart',
    childrenType: 'iconOnly',
  },
};
