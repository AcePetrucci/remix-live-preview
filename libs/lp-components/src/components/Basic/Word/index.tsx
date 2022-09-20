import { motion } from 'framer-motion';

import { TextBlock } from '~/components/Basic/TextBlock';

import { WordProps } from './types/props';

import { useDragging } from './hooks/useDragging';

export const Word = ({
  id,
  layoutId,
  onDrag,
  onDragEnd,
  onDragStart,
  children,
  className,
  style
}: WordProps) => {
  const { dragging, handleDragEnd, handleDragStart } = useDragging({
    onDragStart,
    onDragEnd
  });

  return (
    <motion.div
      id={id}
      className="h-fit"
      style={{ pointerEvents: dragging ? 'none' : 'initial' }}
      drag
      dragMomentum={false}
      dragSnapToOrigin={true}
      onDrag={() => onDrag && onDrag()}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      layoutId={layoutId}
    >
      <TextBlock className={className} style={style}>
        {children}
      </TextBlock>
    </motion.div>
  );
};
