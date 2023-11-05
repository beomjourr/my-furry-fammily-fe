import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta = {
  title: 'next/client-component/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const searchinput: Story = {
  name: 'searchinput',
  args: {
    placeholder: '텍스트홀더 입니다',
  },
};
