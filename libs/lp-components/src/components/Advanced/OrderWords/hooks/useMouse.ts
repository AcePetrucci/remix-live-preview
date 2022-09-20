import { useState, useCallback } from 'react';

import { OrderWordsProps } from '../types/props';

type TUseDragging = Pick<OrderWordsProps, 'onMouseEnter'> &
  Pick<OrderWordsProps, 'onMouseLeave'>;

export const useMouse = ({ onMouseEnter, onMouseLeave }: TUseDragging) => {
  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter();
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  return {
    handleMouseEnter,
    handleMouseLeave
  };
};
