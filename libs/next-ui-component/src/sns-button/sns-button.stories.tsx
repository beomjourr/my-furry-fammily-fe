import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SnsButton } from './sns-button';

const meta = {
  title: 'next/client-component/SnsButton',
  component: SnsButton,
} satisfies Meta<typeof SnsButton>;

export default meta;
type Story = StoryObj<typeof SnsButton>;

export const Kakao: Story = {
  name: 'kakao Button',
  args: {
    type: 'kakao',
  },
};
