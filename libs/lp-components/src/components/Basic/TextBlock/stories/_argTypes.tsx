import type { ArgTypes } from '@storybook/react';

import { TextBlockProps } from '../types/props';

import { htmlBlockMock, reactBlockMock, textBlockMock } from './_mock';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  reactNodeArgTypes
} from '~/utils/argTypes';

const options = ['Basic', 'HTML', 'React'] as const;

export const textBlockArgTypes: ArgTypes<TextBlockProps> & {
  [key: string]: unknown;
} = {
  ...reactNodeArgTypes<typeof options>({
    description: '`string` or `ReactNode` that goes within the block',
    options,
    mapping: {
      Basic: textBlockMock.children,
      HTML: htmlBlockMock.children,
      React: reactBlockMock.children
    }
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
