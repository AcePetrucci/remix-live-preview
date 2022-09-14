import { useLivePreviewContext } from '~/utils/contentStack/livePreviewContext';

import { TrueOrFalse } from 'lp-components';

export default function TrueOrFalsePreview() {
  const { entry } = useLivePreviewContext();

  console.log(entry);

  return (
    <>
      <h1 className="flex justify-center mb-6 text-3xl font-semibold tracking-wide">
        True or False
      </h1>

      <h3
        className="flex flex-wrap gap-2 mb-8 text-lg font-semibold tracking-wide"
        {...entry?.true_false_statement?.$.tf_instruction}
      >
        {entry.true_false_statement.tf_instruction}:
        <span
          className="font-medium tracking-normal text-gray-500 basis-full"
          dangerouslySetInnerHTML={{ __html: entry.true_false_statement.tf_stem }}
        />
      </h3>

      <div className="flex items-center justify-center">
        <TrueOrFalse id="TF" />
      </div>
    </>
  );
}
