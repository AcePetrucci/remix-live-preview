import type { ComponentMeta, ComponentStory } from '@storybook/react';

import PassiveLearning from '../index';

import { passiveLearningMock } from './_mock';
import { passiveLearningArgTypes } from './_argTypes';

export default {
  title: 'Passive Learning',
  component: PassiveLearning
} as ComponentMeta<typeof PassiveLearning>;

const Template: ComponentStory<typeof PassiveLearning> = (args) => (
  <PassiveLearning {...args} />
);

export const PassiveLearningStory = Template.bind({});
PassiveLearningStory.storyName = 'Passive Learning';
PassiveLearningStory.args = passiveLearningMock;
PassiveLearningStory.argTypes = passiveLearningArgTypes;
