import { ReactNode } from 'react';
import type { ArgTypes } from '@storybook/react';

import { TBaseArgTypes } from '~/models/_baseArgTypes';

type TReactNodeArgType<K extends readonly string[]> = TBaseArgTypes & {
  options: K;
  mapping: { [key in K[number]]: ReactNode };
  description: string;
};

type TReactNode = ArgTypes<{ children: ReactNode }>;

export const reactNodeArgTypes = <K extends readonly string[]>({
  options,
  mapping,
  description,
  required = true,
  defaultValue = undefined,
  category = 'Properties',
  disable = false
}: TReactNodeArgType<K>): TReactNode => ({
  children: {
    description: description,
    type: {
      name: 'other',
      value: 'ReactNode',
      required
    },
    table: {
      type: {
        summary: 'ReactNode'
      },
      defaultValue: {
        summary: defaultValue
      },
      category
    },
    control: {
      disable
    },
    options,
    mapping
  }
});
