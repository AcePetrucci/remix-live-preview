import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TrueOrFalse } from '../index';

import { trueFalseMock } from './_mock';
import { trueFalseArgTypes } from './_argTypes';

import { TrueFalseStoryTest } from './TrueFalse.test';

export default {
  title: 'Advanced/True or False',
  component: TrueOrFalse
} as ComponentMeta<typeof TrueOrFalse>;

const Template: ComponentStory<typeof TrueOrFalse> = (args) => (
  <TrueOrFalse {...args} />
);

export const TrueFalseStory = Template.bind({});
TrueFalseStory.storyName = 'True or False';
TrueFalseStory.args = trueFalseMock;
TrueFalseStory.argTypes = trueFalseArgTypes;
TrueFalseStory.play = TrueFalseStoryTest;
