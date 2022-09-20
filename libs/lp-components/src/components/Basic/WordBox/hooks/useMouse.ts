import { WordBoxProps } from '../types/props';

type TUseDragging = Pick<WordBoxProps, 'onMouseEnter'> &
  Pick<WordBoxProps, 'onMouseLeave'>;

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
