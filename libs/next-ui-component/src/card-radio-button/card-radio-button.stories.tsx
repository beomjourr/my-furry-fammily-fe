import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import {
  CardRadioButton,
  CardRadioButtonProps,
  RadioButtonGroup,
} from './card-radio-button';

const meta = {
  title: 'next/client-component/CardRadioButton',
  component: CardRadioButton,
} satisfies Meta<typeof CardRadioButton>;

export default meta;

const Template = (args: CardRadioButtonProps) => {
  const [value, setValue] = useState(args.value);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <RadioButtonGroup value={value} onClick={handleClick}>
      <CardRadioButton value="말티즈">말티즈</CardRadioButton>
      <CardRadioButton value="리트리버">리트리버</CardRadioButton>
      <CardRadioButton value="시츄" disabled>
        시츄
      </CardRadioButton>
    </RadioButtonGroup>
  );
};

export const Primary = (args: CardRadioButtonProps) => <Template {...args} />;
