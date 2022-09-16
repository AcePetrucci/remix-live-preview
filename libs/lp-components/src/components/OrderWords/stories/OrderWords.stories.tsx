import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { OrderWords } from '../index';

export default {
  title: 'Advanced/Order Words',
  component: OrderWords
} as ComponentMeta<typeof OrderWords>;

const Template: ComponentStory<typeof OrderWords> = (args) => (
  <OrderWords {...args} />
);

export const OrderWordsStory = Template.bind({});
OrderWordsStory.storyName = 'Order Words';
