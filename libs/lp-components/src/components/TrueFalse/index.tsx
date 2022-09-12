import type TrueOrFalseProps from './types/props';

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const TrueOrFalse = ({ id }: TrueOrFalseProps) => {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor={`TF-false-${id}`} data-testid={`TF-false-${id}`}>
        <input
          type="radio"
          className="hidden peer"
          id={`TF-false-${id}`}
          name={`TF-${id}`}
          value="false"
        />

        <div
          className={`
            flex items-center gap-2 px-4 py-3 text-lg font-medium 
            text-blue-900 rounded-md cursor-pointer 
            bg-slate-200 hover:bg-slate-300 w-fit
            peer-checked:bg-red-300 peer-checked:text-red-900
            peer-checked:[&>svg]:stroke-red-900
          `}
        >
          <XMarkIcon
            className="w-6 h-6"
            strokeWidth={3}
            data-testid={`TF-icon-false-${id}`}
          />

          <span className="w-fit"> False </span>
        </div>
      </label>

      <label htmlFor={`TF-true-${id}`} data-testid={`TF-true-${id}`}>
        <input
          type="radio"
          className="hidden peer"
          id={`TF-true-${id}`}
          name={`TF-${id}`}
          value="true"
        />

        <div
          className={`
            flex items-center gap-2 px-4 py-3 text-lg font-medium 
            text-blue-900 rounded-md cursor-pointer 
            bg-slate-200 hover:bg-slate-300 w-fit
            peer-checked:bg-green-300 peer-checked:text-green-800
            peer-checked:[&>svg]:stroke-green-800
          `}
        >
          <CheckIcon
            className="w-6 h-6"
            strokeWidth={3}
            data-testid={`TF-icon-true-${id}`}
          />

          <span className="w-fit"> True </span>
        </div>
      </label>
    </div>
  );
};

export default TrueOrFalse;
