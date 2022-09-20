import { CSSProperties } from 'react';
import { ChoiceProps } from '~/components/Basic/Choice/types/props';

export type MultipleChoicesProps = {
  choices: ChoiceProps[];
  type?: ChoiceProps['type'];
  className?: string;
  style?: CSSProperties;
};
