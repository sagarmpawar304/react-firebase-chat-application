import React from 'react';
import { Story } from '@storybook/react';
import Sidebar from '../index';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

const template: Story = props => <Sidebar {...props} />;

export const sidebar = template.bind({});
