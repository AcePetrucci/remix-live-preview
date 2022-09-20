import { TextBlock } from '~/components/Basic/TextBlock';

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { TFButtonProps } from './types/props';

import { getTFClasses } from './_classes';

export const TFButton = ({ id, type, className, style }: TFButtonProps) => {
  return (
    <label htmlFor={`TF-${type}-${id}`} data-testid={`TF-${type}-${id}`}>
      <input
        type="radio"
        className="hidden peer"
        id={`TF-${type}-${id}`}
        name={`TF-${id}`}
        value={type}
      />

      <TextBlock
        className={`${getTFClasses.get(type)} ${className}`}
        style={style}
      >
        {type === 'true' ? (
          <CheckIcon
            className="w-6 h-6"
            strokeWidth={3}
            data-testid={`TF-icon-${type}-${id}`}
          />
        ) : (
          <XMarkIcon
            className="w-6 h-6"
            strokeWidth={3}
            data-testid={`TF-icon-${type}-${id}`}
          />
        )}

        <span className="w-fit">
          {type.at(0)?.toUpperCase().concat(type.slice(1))}
        </span>
      </TextBlock>
    </label>
  );
};
