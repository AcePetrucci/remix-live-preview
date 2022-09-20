import { CSSProperties } from 'react';
import type { ArgTypes } from '@storybook/react';

import { TBaseArgTypes } from '~/models/_baseArgTypes';

type TCSSProperties = ArgTypes<{ style: CSSProperties }>;

export const cssPropertiesArgTypes = ({
  required = false,
  defaultValue = undefined,
  category = 'CSS Properties',
  disable = true
}: TBaseArgTypes = {}): TCSSProperties => ({
  style: {
    description: 'CSS Styles',
    type: {
      name: 'other',
      value: 'React.CSSProperties',
      required
    },
    table: {
      type: {
        summary: 'React.CSSProperties'
      },
      defaultValue: {
        summary: defaultValue
      },
      category
    },
    control: {
      disable
    }
  }
});
