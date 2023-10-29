import type { Meta, StoryObj } from '@storybook/react';

import { KakaoMap } from './KakaoMap';

const meta = {
  title: 'next/client-component/KakaoMap',
  component: KakaoMap,
} satisfies Meta<typeof KakaoMap>;

export default meta;
type Story = StoryObj<typeof KakaoMap>;

export const Default: Story = {};
