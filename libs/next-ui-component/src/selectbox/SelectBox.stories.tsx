import type { Meta, StoryObj } from '@storybook/react';

import { SelectContainer } from './SelectBox';

const meta = {
  title: 'next/client-component/SelectBox',
  component: SelectContainer,
} satisfies Meta<typeof SelectContainer>;

export default meta;
type Story = StoryObj<typeof SelectContainer>;

export const selectbox: Story = {
  name: 'day selectbox',
  args: {
    children: '가나다',
  },
};
