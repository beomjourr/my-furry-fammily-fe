import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'next/client-component/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const labelWithInput: Story = {
  name: 'input with label',
  args: {
    label: 'test',
  },
};
