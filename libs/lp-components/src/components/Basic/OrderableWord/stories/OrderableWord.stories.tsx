import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Reorder } from 'framer-motion';

import { OrderableWord } from '../index';

import { orderableWordMock } from './_mock';
import { OrderableWordArgTypes } from './_argTypes';

export default {
  title: 'Basic/Word Box',
  component: OrderableWord
} as ComponentMeta<typeof OrderableWord>;

const Template: ComponentStory<typeof OrderableWord> = (args) => (
  <Reorder.Group className="flex" axis="x" values={['1']} onReorder={() => {}}>
    <OrderableWord {...args} />
  </Reorder.Group>
);

export const OrderableWordStory = Template.bind({});
OrderableWordStory.storyName = 'Orderable Word';
OrderableWordStory.args = orderableWordMock;
OrderableWordStory.argTypes = OrderableWordArgTypes;
