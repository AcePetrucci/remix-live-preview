import { OrderWordsProps } from '../types/props';

import { OrderableWord } from '~/components/Basic/OrderableWord';

export const oneOrderWordsMock: OrderWordsProps = {
  children: (
    <OrderableWord id="Fox" value="Fox">
      Fox
    </OrderableWord>
  ),
  values: ['Fox'],
  onReorder: (newOrder: any[]) => {}
};

export const multipleOrderWordsMock: OrderWordsProps<string[]> = {
  children: '',
  values: ['Fox', 'Quick', 'The', 'Brown'],
  onReorder: (newOrder: any[]) => {}
};

type TWordsValues = {
  value: string;
  dragged: boolean;
  dragging: boolean;
  outsideBox: boolean;
  insideOrder: boolean;
};

export const boxOrderWordsMock: OrderWordsProps<TWordsValues[]> = {
  children: '',
  values: [
    {
      value: 'Fox',
      dragged: false,
      dragging: false,
      outsideBox: false,
      insideOrder: false
    },
    {
      value: 'Quick',
      dragged: false,
      dragging: false,
      outsideBox: false,
      insideOrder: false
    },
    {
      value: 'The',
      dragged: false,
      dragging: false,
      outsideBox: false,
      insideOrder: false
    },
    {
      value: 'Brown',
      dragged: false,
      dragging: false,
      outsideBox: false,
      insideOrder: false
    }
  ],
  onReorder: (newOrder: any[]) => {}
};
