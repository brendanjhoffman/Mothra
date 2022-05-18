import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const PrimaryContained = Template.bind({});
PrimaryContained.args = {
  children: 'Primary',
  color: 'primary',
  variant: 'contained',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  children: 'Primary',
  color: 'primary',
  variant: 'outlined',
};

export const SecondaryContained = Template.bind({});
SecondaryContained.args = {
  children: 'Secondary',
  color: 'secondary',
  variant: 'contained',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  children: 'Secondary',
  color: 'secondary',
  variant: 'outlined',
};
