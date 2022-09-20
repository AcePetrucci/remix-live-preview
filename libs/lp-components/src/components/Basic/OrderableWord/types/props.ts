import { CSSProperties, ReactNode } from 'react';

export type OrderableWordProps = {
  id: string;
  value: string | number;
  children: ReactNode;
  drag?: boolean;
  onDrag?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  className?: string;
  style?: CSSProperties;
};
