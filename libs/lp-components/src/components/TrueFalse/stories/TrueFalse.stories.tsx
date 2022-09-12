import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TrueFalse from '../index';

import trueFalseMock from './_mock';
import { trueFalseArgTypes } from './_argTypes';

import TrueFalseTest from './TrueFalse.test';

export default {
  title: 'True or False',
  component: TrueFalse
} as ComponentMeta<typeof TrueFalse>;

const Template: ComponentStory<typeof TrueFalse> = (args) => (
  <TrueFalse {...args} />
);

export const TrueFalseStory = Template.bind({});
TrueFalseStory.storyName = 'True or False';
TrueFalseStory.args = trueFalseMock;
TrueFalseStory.argTypes = trueFalseArgTypes;
TrueFalseStory.play = TrueFalseTest;
