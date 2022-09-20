import type { ArgTypes } from '@storybook/react';

import { TBaseArgTypes } from '~/models/_baseArgTypes';

type TGenericArgType = TBaseArgTypes & {
  key: string;
  description: string;
  typeSummary?: string;
  type?: boolean;
};

type TGeneric = ArgTypes<{ [key: string]: string }>;

export const genericArgTypes = ({
  key,
  description,
  type = true,
  typeSummary = 'string',
  required = true,
  defaultValue = undefined,
  category = 'Properties',
  disable = false
}: TGenericArgType): TGeneric => ({
  [key]: {
    description,
    table: {
      type: {
        summary: typeSummary
      },
      defaultValue: {
        summary: defaultValue
      },
      control: {
        disable
      },
      category
    },
    ...(type && {
      type: {
        name: 'string',
        required
      }
    })
  }
});
