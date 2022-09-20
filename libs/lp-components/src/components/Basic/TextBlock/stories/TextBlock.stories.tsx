import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextBlock } from '../index';

import { textBlockMock, htmlBlockMock, reactBlockMock } from './_mock';
import { textBlockArgTypes } from './_argTypes';

export default {
  title: 'Basic/Text Block',
  component: TextBlock
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = (args) => (
  <TextBlock {...args} />
);

export const TextBlockStory = Template.bind({});
TextBlockStory.storyName = 'Text Block';
TextBlockStory.args = textBlockMock;
TextBlockStory.argTypes = textBlockArgTypes;

export const HTMLBlockStory = Template.bind({});
HTMLBlockStory.storyName = 'HTML Block';
HTMLBlockStory.args = htmlBlockMock;
HTMLBlockStory.argTypes = textBlockArgTypes;

export const ReactBlockStory = Template.bind({});
ReactBlockStory.storyName = 'React Block';
ReactBlockStory.args = reactBlockMock;
ReactBlockStory.argTypes = textBlockArgTypes;
