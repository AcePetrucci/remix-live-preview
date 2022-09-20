import type { ArgTypes } from '@storybook/react';

import { TFButtonProps } from '../types/props';

import {
  genericArgTypes,
  classNameArgTypes,
  cssPropertiesArgTypes,
  optionsArgTypes
} from '~/utils/argTypes';

export const tfButtonArgTypes: ArgTypes<Partial<TFButtonProps>> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'id',
    description: 'TF Button input element id'
  }),
  ...optionsArgTypes({
    key: 'type',
    description: 'TF Button input element type',
    options: ['true', 'false'],
    typeSummary: 'true | false',
    typeValue: 'true | false'
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
