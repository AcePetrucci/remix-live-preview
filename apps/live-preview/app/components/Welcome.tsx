import type { EmbeddedItem } from '~/utils/contentStack/getEntry';

type WelcomeProps = {
  entry: EmbeddedItem;
};

export default function Welcome({ entry }: WelcomeProps) {
  return (
    <h1 className="flex justify-center mb-6 text-5xl tracking-wider">
      {entry?.title ? <span {...entry.$?.title}>{entry.title}</span> : 'ContentStack Live Preview'}
    </h1>
  );
}
