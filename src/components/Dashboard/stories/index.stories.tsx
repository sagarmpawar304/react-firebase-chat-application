import React from 'react';
import { Story } from '@storybook/react';
import DashBoard from '../index';
// @ts-ignore
import ProviderBlockComponent from '../providerBlock';

export default {
  title: 'DashBoard',
  component: DashBoard,
  subComponent: ProviderBlockComponent,
};

const template: Story = props => <DashBoard {...props} />;
const ProviderBlockTemplate: Story = props => (
  <ProviderBlockComponent {...props} />
);

export const dashbord = template.bind({});
export const providerBlock = ProviderBlockTemplate.bind({});
