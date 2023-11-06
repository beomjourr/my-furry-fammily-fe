import type { Meta, StoryObj } from '@storybook/react';

import { LargeCardButton } from './CardButton';

const meta = {
  title: 'next/client-component/LargeCardButton',
  component: LargeCardButton,
} satisfies Meta<typeof LargeCardButton>;

export default meta;

type Story = StoryObj<typeof LargeCardButton>;

export const Primary: Story = {
  name: 'LargeCardButton',
  args: {
    badgeText: '반경 5km 이내',
    badgeColor: 'green',
    buttonContent: '내 주변\n동물병원 찾기',
    onClick: () => {
      console.log('실행');
    },
  },
};
