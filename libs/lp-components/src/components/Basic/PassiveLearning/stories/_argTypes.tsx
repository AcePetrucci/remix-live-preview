import type { ArgTypes } from '@storybook/react';

import { PassiveLearningProps } from '../types/props';

import {
  basicPassiveLearningMock,
  htmlPassiveLearningMock,
  scrollPassiveLearningMock
} from './_mock';

import {
  classNameArgTypes,
  cssPropertiesArgTypes,
  reactNodeArgTypes,
  genericArgTypes
} from '~/utils/argTypes';

const options = ['Basic', 'HTML', 'Scroll'] as const;

export const passiveLearningArgTypes: ArgTypes<
  Partial<PassiveLearningProps>
> & {
  [key: string]: unknown;
} = {
  ...genericArgTypes({
    key: 'id',
    description: 'Choice input element id'
  }),
  ...reactNodeArgTypes<typeof options>({
    description: '`string` or `ReactNode` that goes within the block',
    options,
    mapping: {
      Basic: basicPassiveLearningMock.children,
      HTML: htmlPassiveLearningMock.children,
      Scroll: scrollPassiveLearningMock.children
    }
  }),
  ...classNameArgTypes(),
  ...cssPropertiesArgTypes()
};
