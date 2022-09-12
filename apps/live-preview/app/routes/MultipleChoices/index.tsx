import { useLivePreviewContext } from '~/store/livePreviewContext';

import { MultipleChoices } from 'lp-components';

import useChoices from './hooks/useChoices';

export default function MultipleChoicesPreview() {
  const { entry } = useLivePreviewContext();
  const { choices } = useChoices(entry);

  return (
    <>
      <h1 className="flex justify-center mb-6 text-3xl font-semibold tracking-wide">
        Multiple Choices Entry
      </h1>

      <h3
        className="flex flex-wrap gap-2 mb-8 text-lg font-semibold tracking-wide"
        {...entry?.multiple_choice?.$.mc_prompt}
      >
        {entry.multiple_choice.mc_prompt}:
        <span
          className="font-medium tracking-normal text-gray-500 basis-full"
          dangerouslySetInnerHTML={{ __html: entry.multiple_choice.mc_stem }}
        />
      </h3>

      <MultipleChoices choices={choices} type="radio" />
    </>
  );
}
