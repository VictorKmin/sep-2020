const { nameNormalizator } = require('../utils');

const nameNormalizatorData = [
  { input: 'John Doe', output: 'John Doe' },
  { input: 'John@Doe', output: 'John Doe' },
  { input: 'john doe', output: 'John Doe' },
  { input: 'JOHN DOE', output: 'John Doe' },
  { input: 'John-Doe', output: 'John Doe' },
  { input: '     John-Doe       ', output: 'John Doe' },
  { input: 'John         Doe', output: 'John Doe' },
  { input: 'John Doé', output: 'John Doe' },
  { input: 'John      .Doè.', output: 'John Doe' },
  { input: undefined, output: '' },
  { input: null, output: '' },
  { input: '', output: '' },
  { input: 'email@gmail.com', output: 'Email Gmail Com' }, // This function will not work correctly to email
  { input: '+34567890098', output: '34567890098' }, // Will not work for phones
];

describe('Test utils.js', () => {
  test('Should return normalizer name', () => {
    nameNormalizatorData.forEach((testObject) => {
      const name = nameNormalizator(testObject.input);

      expect(name).toBe(testObject.output);
    });
  });
});
