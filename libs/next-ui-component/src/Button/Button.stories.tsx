import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'next/client-component/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: 'Button',
  render: (args) => {
    return <Button {...args}>Button</Button>;
  },
};

export const RightIcon: Story = {
  render: (args) => {
    return (
      <Button {...args}>
        Button
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 13H13.5V20H11.5V13H4.5V11H11.5V4H13.5V11H20.5V13Z"
            fill="#6282DB"
          />
        </svg>
      </Button>
    );
  },
};
