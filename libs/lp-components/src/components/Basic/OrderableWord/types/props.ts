import { CSSProperties, ReactNode } from 'react';

export type OrderableWordProps = {
  id: string;
  value: string | number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};
