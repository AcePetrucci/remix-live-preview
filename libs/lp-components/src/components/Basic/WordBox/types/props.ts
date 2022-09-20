import { CSSProperties, ReactNode } from 'react';

export type WordBoxProps = {
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  style?: CSSProperties;
};
