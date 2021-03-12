import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input, { Props } from '../index';

export default {
  title: 'Editable Input',
  component: Input,
};

const template: Story<Props> = props => <Input {...props} />;

export const TextInput = template.bind({});

TextInput.args = {
  initialValue: 'user name',
  type: 'text',
};
