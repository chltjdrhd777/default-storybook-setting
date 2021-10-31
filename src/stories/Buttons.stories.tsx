import React from 'react';
import { Meta, Story } from '@storybook/react';
// import { BaseButton } from '../Button';
import { BaseButton } from 'src/Button';

const meta: Meta = {
  title: 'Button',
  component: BaseButton,
};

export default meta;

export const PrimaryButton = () => (
  <BaseButton className="primary">Click Me~!</BaseButton>
);
export const SecondaryButton = () => (
  <BaseButton className="secondary">Click Me~!</BaseButton>
);
