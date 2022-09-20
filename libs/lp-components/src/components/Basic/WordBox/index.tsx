import { motion } from 'framer-motion';

import { WordBoxProps } from './types/props';

export const WordBox = ({ children, className, style }: WordBoxProps) => {
  return (
    <motion.section
      className={`relative flex w-6/12 h-48 gap-4 px-6 py-4 border rounded-md shadow-sm ${className}`}
      style={style}
      layout
    >
      {children}
    </motion.section>
  );
};
