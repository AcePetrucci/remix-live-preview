import { motion, useMotionValue } from 'framer-motion';

import { TextBlock } from '~/components/Basic/TextBlock';

import { WordProps } from './types/props';

export const Word = ({
  id,
  onDragEnd,
  children,
  className,
  style
}: WordProps) => {
  const translateY = useMotionValue(0);

  return (
    <motion.div
      style={{ y: translateY }}
      drag
      dragMomentum={false}
      dragSnapToOrigin={true}
      layoutId={`word-${id}`}
      onDragEnd={({ target }) => {
        const offTop = (target as HTMLElement).offsetTop;
        const wordHeight = (target as HTMLElement).offsetHeight;

        const wordPosition = offTop + wordHeight + translateY.get();

        onDragEnd && onDragEnd(wordPosition < 0);
      }}
    >
      <TextBlock className={className} style={style}>
        {children}
      </TextBlock>
    </motion.div>
  );
};
