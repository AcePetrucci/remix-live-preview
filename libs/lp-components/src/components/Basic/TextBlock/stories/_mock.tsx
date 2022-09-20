import { ReactNode } from 'react';

import { TextBlockProps } from '../types/props';

const ReactBlockExample = ({ children }: { children: ReactNode }) => {
  return <div> {children} </div>;
};

export const textBlockMock: TextBlockProps = {
  children: 'Example Text'
};

export const htmlBlockMock: TextBlockProps = {
  children: <p> Example Text within a &lt;p&gt; tag </p>
};

export const reactBlockMock: TextBlockProps = {
  children: (
    <ReactBlockExample> Example Text within a React Element </ReactBlockExample>
  )
};
