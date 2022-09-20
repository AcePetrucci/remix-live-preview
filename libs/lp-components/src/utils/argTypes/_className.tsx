import type { ArgTypes } from '@storybook/react';

import { TBaseArgTypes } from '~/models/_baseArgTypes';

type TClassName = ArgTypes<{ className: string }>;

export const classNameArgTypes = ({
  required = false,
  defaultValue = undefined,
  category = 'CSS Properties',
  disable = true
}: TBaseArgTypes = {}): TClassName => ({
  className: {
    description: 'CSS Classes',
    type: {
      name: 'string',
      required
    },
    table: {
      type: {
        summary: 'string'
      },
      defaultValue: {
        summary: defaultValue
      },
      category
    },
    control: {
      disable
    }
  }
});
