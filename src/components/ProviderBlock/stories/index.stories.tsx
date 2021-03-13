import React from 'react';
import { Story } from '@storybook/react';

import Component from '../index';

export default {
  title: 'provider block',
  component: Component,
};

const template: Story = props => <Component {...props} />;

export const ProviderBlock = template.bind({});
