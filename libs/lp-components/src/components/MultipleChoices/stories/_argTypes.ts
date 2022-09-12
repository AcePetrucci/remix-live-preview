import type { ArgTypes } from '@storybook/react';

import MultipleChoicesProps from '../types/props';

export const multipleChoicesArgTypes: ArgTypes<MultipleChoicesProps> & {
  [key: string]: unknown;
} = {
  type: {
    description: 'Multiple Choice input element type`',
    defaultValue: 'checkbox',
    control: 'select',
    options: ['checkbox', 'radio'],
    table: {
      type: {
        summary: 'checkbox | radio'
      },
      defaultValue: {
        summary: 'checkbox'
      },
      category: 'Properties'
    }
  },
  choices: {
    description: 'Array of Choice props',
    table: {
      type: {
        summary: 'ChoiceProps[]'
      },
      defaultValue: {
        summary: 'undefined'
      },
      category: 'Properties'
    }
  }
};
