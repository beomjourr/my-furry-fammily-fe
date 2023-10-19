import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab';

const meta = {
  title: 'next/client-component/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const tab: Story = {
  name: 'tab',
  args: {
    menu: ['진료별', '규모별'],
  },
};
