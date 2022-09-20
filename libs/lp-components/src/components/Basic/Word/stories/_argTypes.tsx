import type { ArgTypes } from '@storybook/react';

import { WordProps } from '../types/props';

import { wordMock } from './_mock';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  reactNodeArgTypes,
  genericArgTypes
} from '~/utils/argTypes';

const options = ['Basic'] as const;

export const WordArgTypes: ArgTypes<Partial<WordProps>> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'id',
    description: 'Word element id'
  }),
  ...reactNodeArgTypes<typeof options>({
    description: '`string` or `ReactNode` that goes within the block',
    options,
    mapping: {
      Basic: wordMock.children
    }
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes(),
  ...genericArgTypes({
    key: 'onDragEnd',
    description:
      'Fn that executes when the drag event stops. It returns if the element has left the parent box',
    typeSummary: '(out: boolean) => void',
    type: false,
    disable: true
  })
};
