import { Reorder } from 'framer-motion';

import { TextBlock } from '~/components/Basic/TextBlock';

import { OrderableWordProps } from './types/props';

import { useDragging } from './hooks/useDragging';

export const OrderableWord = ({
  id,
  value,
  children,
  drag = true,
  onDrag,
  onDragEnd,
  onDragStart,
  className,
  style
}: OrderableWordProps) => {
  const { dragging, handleDragStart, handleDragEnd } = useDragging({
    onDragStart,
    onDragEnd
  });

  return (
    <Reorder.Item
      className="h-fit"
      style={{ pointerEvents: dragging ? 'none' : 'initial' }}
      key={id}
      value={value}
      drag={drag}
      onDrag={() => onDrag && onDrag()}
      // onDragStart={handleDragStart} //Noticing a bit of laggy behavior with ReorderItem onDragStart
      onDragEnd={handleDragEnd}
      dragMomentum={false}
      dragSnapToOrigin={true}
      layoutId={layoutId}
    >
      <TextBlock className={className} style={style}>
        {children}
      </TextBlock>
    </Reorder.Item>
  );
};
