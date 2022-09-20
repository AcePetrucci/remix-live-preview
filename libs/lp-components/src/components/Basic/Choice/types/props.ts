import { CSSProperties } from 'react';

export type ChoiceProps = {
  choiceText: string;
  name: string;
  value: string;
  id: string;
  type?: 'checkbox' | 'radio';
  className?: string;
  style?: CSSProperties;
};
