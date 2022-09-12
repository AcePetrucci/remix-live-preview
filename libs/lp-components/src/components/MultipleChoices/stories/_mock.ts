import MultipleChoicesProps from '../types/props';

export const fewMultipleChoicesMock: MultipleChoicesProps = {
  type: 'checkbox',
  choices: [
    {
      choiceText: 'Choice 1',
      value: 'choice-1',
      name: 'choice',
      id: 'choice-1'
    },
    {
      choiceText: 'Choice 2',
      value: 'choice-2',
      name: 'choice',
      id: 'choice-2'
    },
    {
      choiceText: 'Choice 3',
      value: 'choice-3',
      name: 'choice',
      id: 'choice-3'
    },
    {
      choiceText: 'Choice 4',
      value: 'choice-4',
      name: 'choice',
      id: 'choice-4'
    },
    {
      choiceText: 'Choice 5',
      value: 'choice-5',
      name: 'choice',
      id: 'choice-5'
    },
    {
      choiceText: 'Choice 6',
      value: 'choice-6',
      name: 'choice',
      id: 'choice-6'
    }
  ]
};

export const manyMultipleChoicesMock: MultipleChoicesProps = {
  type: 'checkbox',
  choices: [
    ...fewMultipleChoicesMock.choices,
    {
      choiceText: 'Choice 7',
      value: 'choice-7',
      name: 'choice',
      id: 'choice-7'
    },
    {
      choiceText: 'Choice 8',
      value: 'choice-8',
      name: 'choice',
      id: 'choice-8'
    },
    {
      choiceText: 'Choice 9',
      value: 'choice-9',
      name: 'choice',
      id: 'choice-9'
    },
    {
      choiceText: 'Choice 10',
      value: 'choice-10',
      name: 'choice',
      id: 'choice-10'
    },
    {
      choiceText: 'Choice 11',
      value: 'choice-11',
      name: 'choice',
      id: 'choice-11'
    },
    {
      choiceText: 'Choice 12',
      value: 'choice-12',
      name: 'choice',
      id: 'choice-12'
    },
    {
      choiceText: 'Choice 13',
      value: 'choice-13',
      name: 'choice',
      id: 'choice-13'
    },
    {
      choiceText: 'Choice 14',
      value: 'choice-14',
      name: 'choice',
      id: 'choice-14'
    },
    {
      choiceText: 'Choice 15',
      value: 'choice-15',
      name: 'choice',
      id: 'choice-15'
    }
  ]
};
