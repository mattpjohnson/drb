const {
  getNumbers,
  getNumbersWithOrdinalIndicators,
  lookupTranslator,
} = require('./helpers')

test('lookupTranslator returns correct values', () => {
  const translator = lookupTranslator({ foo: 'bar', hello: 'world' })
  expect(translator(['hello', 'foo'])).toEqual(['world', 'bar'])
})

test('getNumbers returns all numbers in a range', () => {
  expect(getNumbers(1, 5)).toEqual([1, 2, 3, 4, 5])
})

test('getNumbers works with negative values', () => {
  expect(getNumbers(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3])
})

test('getNumbersWithOrdinalIndicators returns all numbers in a range', () => {
  expect(getNumbersWithOrdinalIndicators(1, 5)).toEqual([
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
  ])
})
