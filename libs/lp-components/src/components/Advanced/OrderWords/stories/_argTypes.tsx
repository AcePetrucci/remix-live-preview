import type { ArgTypes } from '@storybook/react';

import { OrderWordsProps } from '../types/props';

import { oneOrderWordsMock } from './_mock';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  reactNodeArgTypes,
  genericArgTypes
} from '~/utils/argTypes';

const options = ['Basic'] as const;

export const OrderableWordArgTypes: ArgTypes<Partial<OrderWordsProps>> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'values',
    description: 'Array of items so `Reorder.Group` can manage the ordering',
    typeSummary: 'any[]',
    required: true,
    type: false
  }),
  ...reactNodeArgTypes<typeof options>({
    description: '`Reorder.Item` that goes within the block',
    options,
    mapping: {
      Basic: oneOrderWordsMock.children
    }
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes(),
  ...genericArgTypes({
    key: 'onReorder',
    description:
      'Fn that executes when an item replaces another order. It returns the new ordered list of values',
    typeSummary: '(newOrder: any[]) => void',
    required: true,
    type: false,
    disable: true
  })
};
