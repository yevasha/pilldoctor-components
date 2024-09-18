import React from 'react';
import Button from './Button';

export default {
  title: 'Home/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Login',
  variant: 'primary',
  onClick: () => alert('Primary button clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Register',
  variant: 'secondary',
  onClick: () => alert('Secondary button clicked!'),
};