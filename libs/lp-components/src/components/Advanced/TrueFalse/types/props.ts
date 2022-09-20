import { CSSProperties } from 'react';

export type TrueFalseProps = {
  id: string;
  className?: string;
  style?: CSSProperties;
  buttons?: {
    true?: {
      className?: string;
      style?: CSSProperties;
    };
    false?: {
      className?: string;
      style?: CSSProperties;
    };
  };
};
