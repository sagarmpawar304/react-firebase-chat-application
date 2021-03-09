import React from 'react';
import { Story } from '@storybook/react';
import Navbar from '../index';

export default {
  title: 'Navbars',
  component: Navbar,
};

const template: Story = (props) => <Navbar {...props} />;

export const TopNavbar = template.bind({});
