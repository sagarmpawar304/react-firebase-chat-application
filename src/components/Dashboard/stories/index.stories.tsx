import React from 'react';
import { Story } from '@storybook/react';
import DashBoard from '../index';

export default {
  title: 'DashBoard',
  component: DashBoard,
};

const template: Story = props => <DashBoard {...props} />;

export const dashbord = template.bind({});
