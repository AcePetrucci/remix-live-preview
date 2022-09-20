import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Word } from '../index';

import { wordMock } from './_mock';
import { WordArgTypes } from './_argTypes';

export default {
  title: 'Basic/Word Box',
  component: Word
} as ComponentMeta<typeof Word>;

const Template: ComponentStory<typeof Word> = (args) => <Word {...args} />;

export const WordStory = Template.bind({});
WordStory.storyName = 'Word';
WordStory.args = wordMock;
WordStory.argTypes = WordArgTypes;
