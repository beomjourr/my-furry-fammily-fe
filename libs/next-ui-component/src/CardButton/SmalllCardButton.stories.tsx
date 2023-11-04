import type { Meta, StoryObj } from '@storybook/react';

import { SmallCardButton } from './CardButton';

const meta = {
  title: 'next/client-component/SamllCardButton',
  component: SmallCardButton,
} satisfies Meta<typeof SmallCardButton>;

export default meta;

type Story = StoryObj<typeof SmallCardButton>;

export const Primary: Story = {
  name: 'SmallCardButton',
  args: {
    buttonContent: '전체보기',
    iconPath: '../../../images/list.svg',
    onClick: () => {
      console.log('실행');
    },
  },
};
