const { runTokenizer } = require('./runTokenizer')

test('tokenizes empty input string', () => {
  expect(runTokenizer('')).toEqual([])
})

test('tokenizes single character', () => {
  expect(runTokenizer('a')).toEqual(['a'])
})

test('tokenizes complex input strings', () => {
  expect(runTokenizer('aaabbbbcca')).toEqual(['aaa', 'bbbb', 'cc', 'a'])
})

test('tokenizes date string', () => {
  expect(runTokenizer('MMDDYYYY')).toEqual(['MM', 'DD', 'YYYY'])
})

test('tokenizes special characters', () => {
  expect(runTokenizer('¥òÆ™')).toEqual(['¥', 'ò', 'Æ', '™'])
})
