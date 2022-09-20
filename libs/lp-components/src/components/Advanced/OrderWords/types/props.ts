import { CSSProperties, ReactNode } from 'react';

export type OrderWordsProps<T = any[]> = {
  children: ReactNode;
  values: T;
  axis?: 'x' | 'y';
  onReorder: (newOrder: T) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  style?: CSSProperties;
};
