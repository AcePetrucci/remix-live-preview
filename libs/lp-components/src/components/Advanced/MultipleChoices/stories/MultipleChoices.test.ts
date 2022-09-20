import { ReactFramework, StoryContext } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { fewMultipleChoicesMock } from './_mock';
import { MultipleChoicesProps } from '../types/props';

type TMultipleChoicesStoryTest = StoryContext<
  ReactFramework,
  MultipleChoicesProps
>;

export const MultipleChoicesStoryTest = async ({
  canvasElement
}: TMultipleChoicesStoryTest) => {
  const canvas = within(canvasElement);

  /**
   * Check the First Choice
   */

  userEvent.click(
    canvas.getByTestId(`choice-${fewMultipleChoicesMock.choices[0].id}`)
  );

  await waitFor(() =>
    expect(
      canvas.getByTestId(`icon-${fewMultipleChoicesMock.choices[0].id}`)
    ).toBeVisible()
  );

  /**
   * Check the Second Choice
   */

  userEvent.click(
    canvas.getByTestId(`choice-${fewMultipleChoicesMock.choices[1].id}`)
  );

  await waitFor(() =>
    expect(
      canvas.getByTestId(`icon-${fewMultipleChoicesMock.choices[1].id}`)
    ).toBeVisible()
  );

  /**
   * UnCheck the First Choice
   */

  userEvent.click(
    canvas.getByTestId(`choice-${fewMultipleChoicesMock.choices[0].id}`)
  );

  await waitFor(() =>
    expect(
      canvas.getByTestId(`icon-${fewMultipleChoicesMock.choices[0].id}`)
    ).not.toBeVisible()
  );
};
