import React from 'react';
import { Story } from '@storybook/react';

import CustomCard from '../CustomCard';
import CategoryCard from '../CategoryCard';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Custom Card',
  component: CustomCard,
};

const template: Story<{ num: number }> = (args) => <CustomCard {...args} />;

export const Card = template.bind({});

Card.args = {
  num: 44,
};

const template1: Story = (args) => <CategoryCard {...args} />;

export const categoryCard = template1.bind({});
