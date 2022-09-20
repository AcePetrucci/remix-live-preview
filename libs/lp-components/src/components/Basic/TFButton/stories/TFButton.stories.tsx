import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TFButton } from '../index';

import { trueMock, falseMock } from './_mock';
import { tfButtonArgTypes } from './_argTypes';

import { TrueButtonStoryTest, FalseButtonStoryTest } from './TFButton.test';

export default {
  title: 'Basic/TF Button',
  component: TFButton
} as ComponentMeta<typeof TFButton>;

const Template: ComponentStory<typeof TFButton> = (args) => (
  <TFButton {...args} />
);

export const TrueButtonStory = Template.bind({});
TrueButtonStory.storyName = 'True';
TrueButtonStory.args = trueMock;
TrueButtonStory.argTypes = tfButtonArgTypes;
TrueButtonStory.play = TrueButtonStoryTest;

export const FalseButtonStory = Template.bind({});
FalseButtonStory.storyName = 'False';
FalseButtonStory.args = falseMock;
FalseButtonStory.argTypes = tfButtonArgTypes;
FalseButtonStory.play = FalseButtonStoryTest;
