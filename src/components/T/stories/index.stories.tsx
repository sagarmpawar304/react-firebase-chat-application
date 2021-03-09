import React from 'react';
import { Story } from '@storybook/react';

import T from '../index';

export default {
  title: 'Text',
  component: T,
};

const template: Story<{ title: string }> = (args) => <T {...args} />;

export const Title = template.bind({});

Title.args = {
  title: 'Hello Sarah',
};
