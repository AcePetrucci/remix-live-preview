import type { ArgTypes } from '@storybook/react';

import { OrderableWordProps } from '../types/props';

import { orderableWordMock } from './_mock';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  reactNodeArgTypes,
  genericArgTypes
} from '~/utils/argTypes';

const options = ['Basic'] as const;

export const OrderableWordArgTypes: ArgTypes<Partial<OrderableWordProps>> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'id',
    description: 'Orderable Word element key'
  }),
  ...genericArgTypes({
    key: 'value',
    description: 'Orderable Word element value'
  }),
  ...reactNodeArgTypes<typeof options>({
    description: '`string` or `ReactNode` that goes within the block',
    options,
    mapping: {
      Basic: orderableWordMock.children
    }
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
