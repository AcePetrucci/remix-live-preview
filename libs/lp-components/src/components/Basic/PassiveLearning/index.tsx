import { PassiveLearningProps } from './types/props';

export const PassiveLearning = ({
  id,
  children,
  className,
  style
}: PassiveLearningProps) => {
  if (!children) {
    return null;
  }

  return (
    <section
      className={`w-full px-6 py-4 overflow-y-auto border rounded-md shadow-sm max-h-96 max-w-5xl ${className}`}
      data-testid={`passive-learnig-${id}`}
      style={style}
    >
      {children}
    </section>
  );
};
