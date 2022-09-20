import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { WordBox } from '../index';

import { emptyWordBoxMock, oneWordBoxMock, multipleWordBoxMock } from './_mock';
import { WordBoxArgTypes } from './_argTypes';

export default {
  title: 'Basic/Word Box',
  component: WordBox
} as ComponentMeta<typeof WordBox>;

const Template: ComponentStory<typeof WordBox> = (args) => (
  <WordBox {...args} />
);

export const EmptyWordBoxStory = Template.bind({});
EmptyWordBoxStory.storyName = 'Empty Word Box';
EmptyWordBoxStory.args = emptyWordBoxMock;
EmptyWordBoxStory.argTypes = WordBoxArgTypes;

export const OneWordBoxStory = Template.bind({});
OneWordBoxStory.storyName = 'One Word Box';
OneWordBoxStory.args = oneWordBoxMock;
OneWordBoxStory.argTypes = WordBoxArgTypes;

export const MultipleWordBoxStory = Template.bind({});
MultipleWordBoxStory.storyName = 'Multiple Word Box';
MultipleWordBoxStory.args = multipleWordBoxMock;
MultipleWordBoxStory.argTypes = WordBoxArgTypes;
