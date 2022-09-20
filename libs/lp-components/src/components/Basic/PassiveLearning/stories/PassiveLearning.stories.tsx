import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { PassiveLearning } from '../index';

import {
  basicPassiveLearningMock,
  htmlPassiveLearningMock,
  scrollPassiveLearningMock
} from './_mock';
import { passiveLearningArgTypes } from './_argTypes';

export default {
  title: 'Basic/Passive Learning',
  component: PassiveLearning
} as ComponentMeta<typeof PassiveLearning>;

const Template: ComponentStory<typeof PassiveLearning> = (args) => (
  <PassiveLearning {...args} />
);

export const BasicPassiveLearningStory = Template.bind({});
BasicPassiveLearningStory.storyName = 'Passive Learning';
BasicPassiveLearningStory.args = basicPassiveLearningMock;
BasicPassiveLearningStory.argTypes = passiveLearningArgTypes;

export const HTMLPassiveLearningStory = Template.bind({});
HTMLPassiveLearningStory.storyName = 'HTML Passive Learning';
HTMLPassiveLearningStory.args = htmlPassiveLearningMock;
HTMLPassiveLearningStory.argTypes = passiveLearningArgTypes;

export const ScrollPassiveLearningStory = Template.bind({});
ScrollPassiveLearningStory.storyName = 'Scroll Passive Learning';
ScrollPassiveLearningStory.args = scrollPassiveLearningMock;
ScrollPassiveLearningStory.argTypes = passiveLearningArgTypes;
