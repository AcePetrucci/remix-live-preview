import type { ArgTypes } from '@storybook/react';

import ChoiceProps from '../types/props';

export const choiceArgTypes: ArgTypes<ChoiceProps> & {
  [key: string]: unknown;
} = {
  id: {
    description: 'Choice input element id',
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
  },
  choiceText: {
    description: 'Choice Text',
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
  },
  name: {
    description: 'Choice input element name',
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
  },
  value: {
    description: 'Choice input element value',
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
  },
  type: {
    description: 'Choice input element type`',
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
  }
};
