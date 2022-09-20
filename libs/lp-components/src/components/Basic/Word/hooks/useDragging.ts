import { useState } from 'react';

import { WordProps } from '../types/props';

type TUseDragging = Pick<WordProps, 'onDragStart'> &
  Pick<WordProps, 'onDragEnd'>;

export const useDragging = ({ onDragStart, onDragEnd }: TUseDragging) => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
    onDragStart && onDragStart();
  };

  const handleDragEnd = () => {
    setDragging(false);
    onDragEnd && onDragEnd();
  };

  return {
    dragging,
    handleDragStart,
    handleDragEnd
  };
};
