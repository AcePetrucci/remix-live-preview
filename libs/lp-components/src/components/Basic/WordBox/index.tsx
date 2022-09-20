import { motion } from 'framer-motion';

import { WordBoxProps } from './types/props';

import { useMouse } from './hooks/useMouse';

export const WordBox = ({
  children,
  onMouseEnter,
  onMouseLeave,
  className,
  style
}: WordBoxProps) => {
  const { handleMouseEnter, handleMouseLeave } = useMouse({
    onMouseEnter,
    onMouseLeave
  });

  return (
    <motion.section
      className={`relative flex w-6/12 h-48 gap-4 px-6 py-4 border rounded-md shadow-sm ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layout={'position'}
    >
      {children}
    </motion.section>
  );
};
