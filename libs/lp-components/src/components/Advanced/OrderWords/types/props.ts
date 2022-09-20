import { CSSProperties, ReactNode } from 'react';

export type OrderWordsProps = {
  children: ReactNode;
  values: any[];
  onReorder: (newOrder: any[]) => void;
  className?: string;
  style?: CSSProperties;
};
