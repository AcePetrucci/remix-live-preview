import { Reorder } from 'framer-motion';

import { WordBox } from '~/components/Basic/WordBox';

import { OrderWordsProps } from './types/props';

import { useMouse } from './hooks/useMouse';

export const OrderWords = ({
  children,
  axis = 'x',
  values,
  onReorder,
  onMouseEnter,
  onMouseLeave,
  className,
  style
}: OrderWordsProps) => {
  const { handleMouseEnter, handleMouseLeave } = useMouse({
    onMouseEnter,
    onMouseLeave
  });

  return (
    <WordBox
      className={`!h-96`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Reorder.Group
        className={`flex flex-wrap content-start gap-4 ${className}`}
        style={style}
        axis={axis}
        values={values}
        onReorder={onReorder}
        layout="position"
      >
        {children}
      </Reorder.Group>
    </WordBox>
  );
};
