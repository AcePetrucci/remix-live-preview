import type { ArgTypes } from '@storybook/react';

import TrueFalseProps from '../types/props';

export const trueFalseArgTypes: ArgTypes<TrueFalseProps> & {
  [key: string]: unknown;
} = {
  id: {
    description: 'True or False input element id',
    type: {
      name: 'string',
      required: true
    },
    table: {
      type: {
        summary: 'string'
      },
      defaultValue: {
        summary: 'undefined'
      },
      category: 'Properties'
    }
  }
};
