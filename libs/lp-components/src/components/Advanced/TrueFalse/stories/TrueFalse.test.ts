import { ReactFramework, StoryContext } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { trueFalseMock } from './_mock';
import { TrueFalseProps } from '../types/props';

type TTrueFalseStoryTest = StoryContext<ReactFramework, TrueFalseProps>;

export const TrueFalseStoryTest = async ({
  canvasElement
}: TTrueFalseStoryTest) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId(`TF-true-${trueFalseMock.id}`));

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-true-${trueFalseMock.id}`).querySelector('input')
    ).toBeChecked()
  );

  userEvent.click(canvas.getByTestId(`TF-false-${trueFalseMock.id}`));

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-false-${trueFalseMock.id}`).querySelector('input')
    ).toBeChecked()
  );

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-true-${trueFalseMock.id}`).querySelector('input')
    ).not.toBeChecked()
  );
};
