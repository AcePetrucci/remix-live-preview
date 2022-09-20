import { Reorder } from 'framer-motion';

import { WordBox } from '~/components/Basic/WordBox';

import { OrderWordsProps } from './types/props';

export const OrderWords = ({
  className,
  style,
  children,
  onReorder,
  values
}: OrderWordsProps) => {
  return (
    <WordBox className={`h-96`}>
      <Reorder.Group
        axis="x"
        values={values}
        onReorder={onReorder}
        className={`flex flex-wrap content-start gap-4 ${className}`}
        style={style}
        layout="position"
      >
        {children}
      </Reorder.Group>
    </WordBox>
  );
};
