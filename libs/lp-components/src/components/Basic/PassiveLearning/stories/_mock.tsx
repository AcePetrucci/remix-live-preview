import { PassiveLearningProps } from '../types/props';

import { loremMock } from './_lorem';

export const basicPassiveLearningMock: PassiveLearningProps = {
  id: '123',
  children: 'Passive Learning Content Showcase'
};

export const htmlPassiveLearningMock: PassiveLearningProps = {
  id: '123',
  children: <p> Passive Content withing a &lt;p&gt; tag </p>
};

export const scrollPassiveLearningMock: PassiveLearningProps = {
  id: '123',
  children: loremMock
};
