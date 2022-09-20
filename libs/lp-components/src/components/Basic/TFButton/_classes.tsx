const trueClasses = `
  peer-checked:bg-green-300 peer-checked:text-green-800
  peer-checked:[&>svg]:stroke-green-800 !gap-2
`;

const falseClasses = `
  peer-checked:bg-red-300 peer-checked:text-red-900
  peer-checked:[&>svg]:stroke-red-900 !gap-2
`;

export const getTFClasses = new Map<'true' | 'false', string>([
  ['true', trueClasses],
  ['false', falseClasses]
]);
