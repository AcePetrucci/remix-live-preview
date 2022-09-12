import { ReactFramework, StoryContext } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import truefalseMock from './_mock';
import TrueFalseProps from '../types/props';

type TChoiceStoryTest = StoryContext<ReactFramework, TrueFalseProps>;

const TrueFalseStoryTest = async ({ canvasElement }: TChoiceStoryTest) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId(`TF-true-${truefalseMock.id}`));

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-true-${truefalseMock.id}`).querySelector('input')
    ).toBeChecked()
  );

  userEvent.click(canvas.getByTestId(`TF-false-${truefalseMock.id}`));

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-false-${truefalseMock.id}`).querySelector('input')
    ).toBeChecked()
  );

  await waitFor(() =>
    expect(
      canvas.getByTestId(`TF-true-${truefalseMock.id}`).querySelector('input')
    ).not.toBeChecked()
  );
};

export default TrueFalseStoryTest;
