import type { Meta, StoryObj } from '@storybook/react';

import { SelectBox } from './SelectBox';
import { OptionBox } from './OptionBox';

const meta = {
  title: 'next/client-component/SelectBox',
  component: SelectBox,
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const selectbox: Story = {
  name: 'selectbox',
  render: () => {
    return (
      <SelectBox defaultLabel="년" onChange={(value) => console.log(value)}>
        <OptionBox value="2022">2022년</OptionBox>
        <OptionBox value="2023">2023년</OptionBox>
        <OptionBox value="2024">2024년</OptionBox>
      </SelectBox>
    );
  },
};
