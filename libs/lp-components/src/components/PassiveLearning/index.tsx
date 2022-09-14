import PassiveLearningProps from './types/props';

const PassiveLearning = ({ id, children, config }: PassiveLearningProps) => {
  if (!children) {
    return null;
  }

  return (
    <section
      className="w-6/12 px-6 py-4 overflow-y-auto border rounded-md shadow-sm max-h-96"
      data-testid={`passive-learnig-${id}`}
      style={{
        maxHeight: config?.maxHeight,
        width: config?.width
      }}
    >
      {children}
    </section>
  );
};

export default PassiveLearning;
