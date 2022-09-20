import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { OrderWords } from '../index';

import { BoxMultipleOrderWords } from './examples/BoxMultipleWords';

import { boxOrderWordsMock } from './_mock';
import { OrderableWordArgTypes } from './_argTypes';

export default {
  title: 'Advanced/Order Words',
  component: OrderWords
} as ComponentMeta<typeof OrderWords>;

/**
 * Multiple Words - With Word Box
 */

const BoxMultipleWordsTemplate: ComponentStory<typeof OrderWords> = (args) => {
  return <BoxMultipleOrderWords />;
};

export const BoxMultipleOrderWordsStory = BoxMultipleWordsTemplate.bind({});
BoxMultipleOrderWordsStory.storyName = 'Order Words - Word Box';
BoxMultipleOrderWordsStory.args = boxOrderWordsMock;
BoxMultipleOrderWordsStory.argTypes = OrderableWordArgTypes;
