import { useState } from 'react';

import { OrderableWordProps } from '../types/props';

type TUseDragging = Pick<OrderableWordProps, 'onDragStart'> &
  Pick<OrderableWordProps, 'onDragEnd'>;

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
