import { v5 as uuid } from 'uuid';

import type { EmbeddedItem } from '~/utils/contentStack/getEntry';

const useChoices = (entry: EmbeddedItem) => {
  const choicesUUID = uuid(entry.multiple_choice.mc_prompt, ENV.UUID);

  const choices = entry.multiple_choice_choices.map((choice: any, i: number) => ({
    choiceText:
      choice.mc_choice_answer?.mc_choice_answer_text ||
      choice.mc_choice_detractor?.mc_choice_detractor_text,
    value: (
      choice.mc_choice_answer?.mc_choice_answer_points ||
      choice.mc_choice_detractor?.mc_choice_detractor_points
    ).toString(),
    name: `choices-${choicesUUID}`,
    id: `choices-${choicesUUID}-${i}`
  }));

  return { choices };
};

export default useChoices;
