import type { ArgTypes } from '@storybook/react';

import { ChoiceProps } from '../types/props';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  genericArgTypes,
  optionsArgTypes
} from '~/utils/argTypes';

export const choiceArgTypes: ArgTypes<Partial<ChoiceProps>> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'id',
    description: 'Choice input element id'
  }),
  ...genericArgTypes({
    key: 'choiceText',
    description: 'Choice Text'
  }),
  ...genericArgTypes({
    key: 'name',
    description: 'Choice input element name'
  }),
  ...genericArgTypes({
    key: 'value',
    description: 'Choice input element value'
  }),
  ...optionsArgTypes({
    key: 'type',
    description: 'Choice input element type',
    options: ['checkbox', 'radio'],
    typeSummary: 'checkbox | radio',
    typeValue: 'checkbox | radio',
    defaultValue: 'checkbox'
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
