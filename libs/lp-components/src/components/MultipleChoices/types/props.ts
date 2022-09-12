import ChoiceProps from '~/components/Choice/types/props';

type MultipleChoicesProps = {
  choices: ChoiceProps[];
  type?: ChoiceProps['type'];
};

export default MultipleChoicesProps;
