import { CSSProperties, ReactNode } from 'react';

export type WordProps = {
  children: ReactNode;
  id: string;
  onDragEnd?: (out: boolean) => void;
  className?: string;
  style?: CSSProperties;
};
