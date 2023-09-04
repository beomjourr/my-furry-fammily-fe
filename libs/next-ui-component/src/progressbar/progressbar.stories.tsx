import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './progressbar';

const meta = {
  title: 'next/client-component/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  name: 'Progress bar',
  args: {
    max: 100,
    current: 5,
  },
};
