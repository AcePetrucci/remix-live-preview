import { ReactNode } from 'react';
import type { ArgTypes } from '@storybook/react';

import { TBaseArgTypes } from '~/models/_baseArgTypes';

type TOptionsArgType<K extends readonly string[], T> = TBaseArgTypes & {
  key: string;
  options: K;
  mapping?: { [key in K[number]]: T };
  description: string;
  typeSummary: string;
  typeValue: string;
};

type TOptions = ArgTypes<{ [key: string]: unknown }>;

export const optionsArgTypes = <K extends readonly string[], T>({
  key,
  options,
  mapping,
  description,
  typeSummary,
  typeValue,
  required = true,
  defaultValue = undefined,
  category = 'Properties',
  disable = false
}: TOptionsArgType<K, T>): TOptions => ({
  [key]: {
    description: description,
    defaultValue,
    type: {
      name: 'other',
      value: typeValue,
      required
    },
    table: {
      type: {
        summary: typeSummary
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
