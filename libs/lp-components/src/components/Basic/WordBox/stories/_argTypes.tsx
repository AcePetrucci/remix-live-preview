import type { ArgTypes } from '@storybook/react';

import { WordBoxProps } from '../types/props';

import { emptyWordBoxMock, oneWordBoxMock, multipleWordBoxMock } from './_mock';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  reactNodeArgTypes,
  genericArgTypes
} from '~/utils/argTypes';

const options = ['Empty', 'One', 'Multiple'] as const;

export const WordBoxArgTypes: ArgTypes<Partial<WordBoxProps>> & {
  [key: string]: unknown;
} = {
  ...reactNodeArgTypes<typeof options>({
    description: '`string` or `ReactNode` that goes within the Word Box',
    options,
    mapping: {
      Empty: emptyWordBoxMock.children,
      One: oneWordBoxMock.children,
      Multiple: multipleWordBoxMock.children
    }
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
