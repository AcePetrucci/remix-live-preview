import type ChoiceProps from './types/props';

import { CheckIcon } from '@heroicons/react/24/outline';

const Choice = ({
  choiceText,
  id,
  name,
  value,
  type = 'checkbox'
}: ChoiceProps) => {
  return (
    <label htmlFor={`choice-${id}`} data-testid={`choice-${id}`}>
      <input
        type={type}
        className="hidden peer"
        id={`choice-${id}`}
        name={`choice-${name}`}
        value={value}
      />

      <div
        className={`
          flex items-center gap-3 px-4 py-3 text-lg font-medium 
          text-blue-900 rounded-md cursor-pointer 
          bg-slate-200 hover:bg-slate-300 w-fit
          peer-checked:bg-green-300 peer-checked:text-green-800
          peer-checked:[&>div]:border-green-800
          peer-checked:[&>div>svg]:visible
          peer-checked:[&>div>svg]:stroke-green-800
        `}
      >
        <div className="flex items-center justify-center w-4 h-4 border-2 border-blue-900 rounded-sm translate-y-1p">
          <CheckIcon
            className="invisible"
            strokeWidth={3}
            data-testid={`icon-${id}`}
          />
        </div>

        <span className="w-fit"> {choiceText} </span>
      </div>
    </label>
  );
};

export default Choice;
