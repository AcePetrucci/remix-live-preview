import type { TEmbeddedItem } from '~/utils/contentStack/livePreviewContext';

type WelcomeProps = {
  entry: TEmbeddedItem;
};

export default function Welcome({ entry }: WelcomeProps) {
  return (
    <h1 className="flex justify-center mb-6 text-5xl tracking-wider">
      {entry?.title ? <span {...entry.$?.title}>{entry.title}</span> : 'ContentStack Live Preview'}
    </h1>
  );
}
