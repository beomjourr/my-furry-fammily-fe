import type { Meta, StoryObj } from '@storybook/react';

import { SnsButton } from './sns-button';

const meta = {
  title: 'ui-component/SnsButton',
  component: SnsButton,
} satisfies Meta<typeof SnsButton>;

export default meta;
type Story = StoryObj<typeof SnsButton>;

export const Kakao: Story = {
  name: 'kakao Button',
  render: () => <SnsButton type="kakao" />,
};
