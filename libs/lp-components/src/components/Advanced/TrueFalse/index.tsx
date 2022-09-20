import type { TrueFalseProps } from './types/props';

import { TFButton } from '~/components/Basic/TFButton';

export const TrueOrFalse = ({
  id,
  className,
  style,
  buttons
}: TrueFalseProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={style}>
      <TFButton
        id={id}
        type="false"
        className={buttons?.false?.className}
        style={buttons?.false?.style}
      />

      <TFButton
        id={id}
        type="true"
        className={buttons?.true?.className}
        style={buttons?.true?.style}
      />
    </div>
  );
};
