import { ReactFramework, StoryContext } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { trueMock, falseMock } from './_mock';
import { TFButtonProps } from '../types/props';

type TTrueFalseStoryTest = StoryContext<ReactFramework, TFButtonProps>;

export const TrueButtonStoryTest = async ({
  canvasElement
}: TTrueFalseStoryTest) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId(`TF-true-${trueMock.id}`));

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-true-${trueMock.id}`).querySelector('input')
    ).toBeChecked()
  );
};

export const FalseButtonStoryTest = async ({
  canvasElement
}: TTrueFalseStoryTest) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId(`TF-false-${falseMock.id}`));

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-false-${falseMock.id}`).querySelector('input')
    ).toBeChecked()
  );
};
