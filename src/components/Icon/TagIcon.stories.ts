import type { Meta, StoryObj } from '@storybook/react';
import { TAGS } from '@/constants/reviewFilter';
import TagIcon from './TagIcon';

const tagIcons = Object.keys(TAGS).filter((key) => key !== 'NOFILTER');

const meta = {
  title: 'Example/TagIcon',
  component: TagIcon,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    name: {
      control: { type: 'select' },
      options: tagIcons,
    },
  },
} satisfies Meta<typeof TagIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    name: 'COFFEE',
  },
};
