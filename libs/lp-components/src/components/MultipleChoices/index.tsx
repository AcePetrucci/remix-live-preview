import Choice from '../Choice';
import MultipleChoicesProps from './types/props';

const MultipleChoices = ({ choices, type }: MultipleChoicesProps) => {
  const gridCols =
    choices.length > 12
      ? 'grid-cols-3'
      : choices.length >= 6
      ? 'grid-cols-2'
      : 'grid-cols-1';

  return (
    <div className={`grid gap-2 ${gridCols} [&>label>div]:w-full`}>
      {choices.map((choice) => (
        <Choice
          key={`choice-${choice.name}-${choice.id}`}
          type={type}
          {...choice}
        />
      ))}
    </div>
  );
};

export default MultipleChoices;
