import { WordBoxProps } from '../types/props';

import { Word } from '~/components/Basic/Word';

export const emptyWordBoxMock: WordBoxProps = {
  children: null
};

export const oneWordBoxMock: WordBoxProps = {
  children: <Word id="fox-1"> Fox </Word>
};

export const multipleWordBoxMock: WordBoxProps = {
  children: (
    <>
      <Word id="fox-2"> Fox </Word>
      <Word id="brown-2"> Brown </Word>
      <Word id="quick-2"> Quick </Word>
    </>
  )
};
