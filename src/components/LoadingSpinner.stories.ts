import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '@/components/LoadingSpinner';

const meta = {
  title: 'Example/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
