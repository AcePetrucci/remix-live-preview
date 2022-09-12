import { ReactFramework, StoryContext } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import choiceMock from './_mock';
import ChoiceProps from '../types/props';

type TChoiceStoryTest = StoryContext<ReactFramework, ChoiceProps>;

const ChoiceStoryTest = async ({ canvasElement }: TChoiceStoryTest) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId(`choice-${choiceMock.id}`));

  await waitFor(() =>
    expect(canvas.getByTestId(`icon-${choiceMock.id}`)).toBeVisible()
  );

  userEvent.click(canvas.getByTestId(`choice-${choiceMock.id}`));

  await waitFor(() =>
    expect(canvas.getByTestId(`icon-${choiceMock.id}`)).not.toBeVisible()
  );
};

export default ChoiceStoryTest;
