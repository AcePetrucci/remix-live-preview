import type { ArgTypes } from '@storybook/react';

import PassiveLearningProps from '../types/props';

import loremMock from './_lorem';

export const passiveLearningArgTypes: ArgTypes<PassiveLearningProps> & {
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
  },
  children: {
    description: 'Children to be rendered by the Passive Learning block',
    type: {
      name: 'other',
      required: true,
      value: 'ReactNode'
    },
    table: {
      type: {
        summary: 'ReactNode'
      },
      defaultValue: {
        summary: 'undefined'
      },
      category: 'Properties'
    },
    options: ['Basic', 'HTML', 'Scroll'],
    mapping: {
      Basic: 'Passive Content Learning Showcase',
      HTML: <p> Passive Content withing a &lt;p&gt; tag </p>,
      Scroll: loremMock
    }
  },
  config: {
    description: 'Style Configurations for the Passive Learning block',
    type: {
      name: 'object',
      required: false,
      value: {
        maxHeight: {
          name: 'string',
          required: false
        },
        width: {
          name: 'string',
          required: false
        }
      }
    },
    table: {
      type: {
        summary: 'React.CSSProperties'
      },
      defaultValue: {
        summary: 'undefined'
      },
      category: 'Properties'
    }
  }
};
