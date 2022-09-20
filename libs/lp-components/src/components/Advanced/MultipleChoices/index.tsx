import { useMemo } from 'react';

import { Choice } from '../../Basic/Choice';
import { MultipleChoicesProps } from './types/props';

export const MultipleChoices = ({
  choices,
  type,
  className,
  style
}: MultipleChoicesProps) => {
  const gridCols = useMemo(() => {
    if (choices.length > 12) {
      return 'grid-cols-3';
    }

    return choices.length >= 6 ? 'grid-cols-2' : 'grid-cols-1';
  }, []);

  return (
    <div
      className={`grid gap-2 ${gridCols} [&>label>div]:w-full ${className}`}
      style={style}
    >
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
