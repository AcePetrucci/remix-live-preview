import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { OrderableWord } from '~/components/Basic/OrderableWord';

import { OrderWords } from '../index';

import { oneOrderWordsMock, multipleOrderWordsMock } from './_mock';
import { OrderableWordArgTypes } from './_argTypes';

export default {
  title: 'Advanced/Order Words',
  component: OrderWords
} as ComponentMeta<typeof OrderWords>;

/**
 * One Word
 */

const OneWordTemplate: ComponentStory<typeof OrderWords> = (args) => (
  <OrderWords {...args} />
);

export const OneOrderWordsStory = OneWordTemplate.bind({});
OneOrderWordsStory.storyName = 'Order Words - One';
OneOrderWordsStory.args = oneOrderWordsMock;
OneOrderWordsStory.argTypes = OrderableWordArgTypes;

/**
 * Multiple Words
 */

const MultipleWordsTemplate: ComponentStory<typeof OrderWords> = (args) => {
  const [items, setItems] = useState(multipleOrderWordsMock.values);

  return (
    <OrderWords {...args} values={items} onReorder={setItems}>
      {items.map((item) => (
        <OrderableWord key={item} id={`multiple-${item}`} value={item}>
          {item}
        </OrderableWord>
      ))}
    </OrderWords>
  );
};

export const MultipleOrderWordsStory = MultipleWordsTemplate.bind({});
MultipleOrderWordsStory.storyName = 'Order Words - Multiple';
MultipleOrderWordsStory.args = multipleOrderWordsMock;
MultipleOrderWordsStory.argTypes = OrderableWordArgTypes;
