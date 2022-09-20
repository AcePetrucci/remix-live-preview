import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { MultipleChoices } from '../index';

import { fewMultipleChoicesMock, manyMultipleChoicesMock } from './_mock';
import { multipleChoicesArgTypes } from './_argTypes';

import { MultipleChoicesStoryTest } from './MultipleChoices.test';

export default {
  title: 'Advanced/Multiple Choices',
  component: MultipleChoices
} as ComponentMeta<typeof MultipleChoices>;

const Template: ComponentStory<typeof MultipleChoices> = (args) => (
  <MultipleChoices {...args} />
);

export const FewMultipleChoicesStory = Template.bind({});
FewMultipleChoicesStory.storyName = 'Few Multiple Choices';
FewMultipleChoicesStory.args = fewMultipleChoicesMock;
FewMultipleChoicesStory.argTypes = multipleChoicesArgTypes;
FewMultipleChoicesStory.play = MultipleChoicesStoryTest;

export const ManyMultipleChoicesStory = Template.bind({});
ManyMultipleChoicesStory.storyName = 'Many Multiple Choices';
ManyMultipleChoicesStory.args = manyMultipleChoicesMock;
ManyMultipleChoicesStory.argTypes = multipleChoicesArgTypes;
ManyMultipleChoicesStory.play = MultipleChoicesStoryTest;
