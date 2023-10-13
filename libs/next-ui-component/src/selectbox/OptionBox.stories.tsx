import type { Meta, StoryObj } from '@storybook/react';

import { OptionBox } from './OptionBox';

const meta = {
  title: 'next/client-component/OptionBox',
  component: OptionBox,
} satisfies Meta<typeof OptionBox>;

export default meta;
type Story = StoryObj<typeof OptionBox>;

export const optionbox: Story = {
  name: 'optionbox',
  args: {
    children: '텍스트',
  },
};
