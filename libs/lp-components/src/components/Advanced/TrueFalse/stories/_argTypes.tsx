import type { ArgTypes } from '@storybook/react';

import { TrueFalseProps } from '../types/props';

import {
  genericArgTypes,
  classNameArgTypes,
  cssPropertiesArgTypes
} from '~/utils/argTypes';

export const trueFalseArgTypes: ArgTypes<Partial<TrueFalseProps>> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'id',
    description: 'True or False input element id'
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
