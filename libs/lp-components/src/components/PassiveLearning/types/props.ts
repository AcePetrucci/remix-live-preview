import { ReactNode } from 'react';

type PassiveLearningProps = {
  id: string;
  children: ReactNode;
  config?: {
    maxHeight?: string;
    width?: string;
  };
};

export default PassiveLearningProps;
