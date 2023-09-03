import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './progressbar';

const meta = {
  title: 'next/client-component/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'Progress bar',
  args: {
    max: 100,
    current: 5,
  },
};
