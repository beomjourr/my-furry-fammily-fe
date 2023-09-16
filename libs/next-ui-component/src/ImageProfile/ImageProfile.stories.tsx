import type { Meta, StoryObj } from '@storybook/react';

import { ImageProfile } from './ImageProfile';

const meta = {
  title: 'next/client-component/ImageProfile',
  component: ImageProfile,
} satisfies Meta<typeof ImageProfile>;

export default meta;
type Story = StoryObj<typeof ImageProfile>;

export const Default: Story = {
  name: 'Image Profile',
  args: {
    onUpload: (image) => {
      console.log(image);
    },
  },
};
