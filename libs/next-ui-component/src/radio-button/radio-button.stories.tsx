import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import {
  RadioButton,
  RadioButtonGroup,
  RadioButtonProps,
} from './radio-button';

const meta = {
  title: 'next/client-component/RadioButton',
  component: RadioButton,
} satisfies Meta<typeof RadioButton>;

export default meta;

const Template = (args: RadioButtonProps) => {
  const [value, setValue] = useState(args.value);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
      }}
    >
      <RadioButtonGroup value={value} onClick={handleClick}>
        <RadioButton value="말티즈">말티즈</RadioButton>
        <RadioButton value="리트리버">리트리버</RadioButton>
        <RadioButton value="시츄" disabled>
          시츄
        </RadioButton>
      </RadioButtonGroup>
    </div>
  );
};

export const Primary = (args: RadioButtonProps) => <Template {...args} />;
