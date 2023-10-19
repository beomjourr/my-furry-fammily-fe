import type { Meta, StoryObj } from '@storybook/react';

import { TabItem } from './TabItem';

const meta = {
  title: 'next/client-component/TabItem',
  component: TabItem,
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof TabItem>;

export const tabitem: Story = {
  name: 'tabitem',
  args: {},
};
