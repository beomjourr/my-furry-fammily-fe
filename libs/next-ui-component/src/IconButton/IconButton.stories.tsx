import type { Meta, StoryObj } from '@storybook/react';

import backArrow from '@my-furry-family/images/ico_back.png';
import { IconButton } from './IconButton';

const meta = {
  title: 'next/client-component/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'Back arrow Icon Button',
  args: {
    src: backArrow,
    alt: 'back',
    size: 'small',
    onClick: () => {
      console.log('onClick');
    },
  },
};
