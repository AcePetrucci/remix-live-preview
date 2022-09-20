import { CSSProperties, ReactNode } from 'react';

export type WordProps = {
  children: ReactNode;
  id: string;
  layoutId: string;
  onDrag?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  className?: string;
  style?: CSSProperties;
};
