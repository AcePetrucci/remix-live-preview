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

export const multipleOrderWordsMock: OrderWordsProps = {
  children: '',
  values: ['Fox', 'Brown', 'The', 'Quick'],
  onReorder: (newOrder: any[]) => {}
};
