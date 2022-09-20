import { Reorder } from 'framer-motion';

import { TextBlock } from '~/components/Basic/TextBlock';

import { OrderableWordProps } from './types/props';

export const OrderableWord = ({
  id,
  value,
  children,
  className,
  style
}: OrderableWordProps) => {
  return (
    <Reorder.Item
      className="h-fit"
      key={id}
      value={value}
      drag
      layoutId={`orderable-word-${id}`}
    >
      <TextBlock className={className} style={style}>
        {children}
      </TextBlock>
    </Reorder.Item>
  );
};
