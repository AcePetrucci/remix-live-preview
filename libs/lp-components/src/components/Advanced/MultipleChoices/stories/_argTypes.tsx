import type { ArgTypes } from '@storybook/react';

import { MultipleChoicesProps } from '../types/props';

import {
  optionsArgTypes,
  genericArgTypes,
  classNameArgTypes,
  cssPropertiesArgTypes
} from '~/utils/argTypes';

export const multipleChoicesArgTypes: ArgTypes<
  Partial<MultipleChoicesProps>
> & {
  [key: string]: unknown;
} = {
  ...optionsArgTypes({
    key: 'type',
    description: 'Multiple Choice input element type',
    options: ['checkbox', 'radio'],
    typeSummary: 'checkbox | radio',
    typeValue: 'checkbox | radio',
    defaultValue: 'checkbox'
  }),
  ...genericArgTypes({
    key: 'choices',
    description: 'Array of Choice props',
    typeSummary: 'ChoiceProps[]',
    type: false
  }),
  ...cssPropertiesArgTypes(),
  ...classNameArgTypes()
};
