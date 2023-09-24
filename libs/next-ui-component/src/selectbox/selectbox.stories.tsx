import type { Meta, StoryObj } from '@storybook/react';

import { DateSelector } from './selectbox';

const meta = {
  title: 'next/client-component/selectbox',
  component: DateSelector,
} satisfies Meta<typeof DateSelector>;

export default meta;
type Story = StoryObj<typeof DateSelector>;

export const selectbox: Story = {
  name: 'day selectbox',
  args: {
    value: 20,
    label: '가나다',
  },
};
