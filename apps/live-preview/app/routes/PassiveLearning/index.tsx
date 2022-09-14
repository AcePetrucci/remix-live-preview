import { useLivePreviewContext } from '~/utils/contentStack/livePreviewContext';

import { PassiveLearning } from 'lp-components';

export default function TrueOrFalsePreview() {
  const { entry } = useLivePreviewContext();

  console.log(entry);

  return (
    <>
      <h1
        className="flex justify-center mb-6 text-3xl font-semibold tracking-wide"
        {...entry?.passive_learning?.$.passive_content_block}
      >
        Passive Learning
      </h1>

      <div
        className="flex items-center justify-center"
        {...entry?.passive_learning?.$.passive_content_block}
      >
        <PassiveLearning id="PL-1">
          <span
            dangerouslySetInnerHTML={{ __html: entry.passive_learning.passive_content_block }}
          />
        </PassiveLearning>
      </div>
    </>
  );
}
