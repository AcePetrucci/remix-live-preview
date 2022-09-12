import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Choice from '../index';

import choiceMock from './_mock';
import { choiceArgTypes } from './_argTypes';

import ChoiceStoryTest from './Choice.test';

export default {
  title: 'Choices',
  component: Choice
} as ComponentMeta<typeof Choice>;

const Template: ComponentStory<typeof Choice> = (args) => <Choice {...args} />;

export const ChoiceStory = Template.bind({});
ChoiceStory.storyName = 'Choice';
ChoiceStory.args = choiceMock;
ChoiceStory.argTypes = choiceArgTypes;
ChoiceStory.play = ChoiceStoryTest;
