const { momentTranslator } = require('./momentTranslator')

test('translates months to valid months regexes', () => {
  const tokens = momentTranslator(['M'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('12')).toBe(true)
  expect(regex.test('13')).toBe(false)
  expect(regex.test('3')).toBe(true)
})

test('translates months to valid months regexes', () => {
  const tokens = momentTranslator(['Mo'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('12th')).toBe(true)
  expect(regex.test('13th')).toBe(false)
  expect(regex.test('3rd')).toBe(true)
  expect(regex.test('4th')).toBe(true)
  expect(regex.test('3th')).toBe(false)
})

test('translates months to valid months regexes', () => {
  const tokens = momentTranslator(['MM'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('12')).toBe(true)
  expect(regex.test('13')).toBe(false)
  expect(regex.test('123')).toBe(false)
  expect(regex.test('3')).toBe(false)
})

test('translates months to valid months regexes', () => {
  const tokens = momentTranslator(['MMM'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('Jan')).toBe(true)
  expect(regex.test('Jul')).toBe(true)
  expect(regex.test('Jut')).toBe(false)
  expect(regex.test('Aug')).toBe(true)
})

test('translates months to valid months regexes', () => {
  const tokens = momentTranslator(['MMMM'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('February')).toBe(true)
  expect(regex.test('March')).toBe(true)
  expect(regex.test('Marty')).toBe(false)
})

test('translates quarters to valid quarter regexes', () => {
  const tokens = momentTranslator(['Q'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('2')).toBe(true)
  expect(regex.test('3')).toBe(true)
  expect(regex.test('4')).toBe(true)
  expect(regex.test('5')).toBe(false)
  expect(regex.test('0')).toBe(false)
})

test('translates quarters to valid quarter regexes', () => {
  const tokens = momentTranslator(['Qo'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('2nd')).toBe(true)
  expect(regex.test('3rd')).toBe(true)
  expect(regex.test('4th')).toBe(true)
  expect(regex.test('5th')).toBe(false)
  expect(regex.test('0st')).toBe(false)
})

test('translates days to valid day regexes', () => {
  const tokens = momentTranslator(['D'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('23')).toBe(true)
  expect(regex.test('31')).toBe(true)
  expect(regex.test('01')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('32')).toBe(false)
})

test('translates days to valid day regexes', () => {
  const tokens = momentTranslator(['Do'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('12th')).toBe(true)
  expect(regex.test('20th')).toBe(true)
  expect(regex.test('21st')).toBe(true)
  expect(regex.test('23rd')).toBe(true)
  expect(regex.test('31st')).toBe(true)
  expect(regex.test('32nd')).toBe(false)
  expect(regex.test('01st')).toBe(false)
  expect(regex.test('0st')).toBe(false)
})

test('translates days to valid day regexes', () => {
  const tokens = momentTranslator(['DD'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('23')).toBe(true)
  expect(regex.test('31')).toBe(true)
  expect(regex.test('1')).toBe(false)
  expect(regex.test('32')).toBe(false)
})

test('translates days to valid day regexes', () => {
  const tokens = momentTranslator(['DDD'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('32')).toBe(true)
  expect(regex.test('56')).toBe(true)
  expect(regex.test('365')).toBe(true)
  expect(regex.test('01')).toBe(false)
  expect(regex.test('023')).toBe(false)
  expect(regex.test('366')).toBe(false)
})

test('translates days to valid day regexes', () => {
  const tokens = momentTranslator(['DDDo'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('32nd')).toBe(true)
  expect(regex.test('56th')).toBe(true)
  expect(regex.test('132nd')).toBe(true)
  expect(regex.test('365th')).toBe(true)
  expect(regex.test('01st')).toBe(false)
  expect(regex.test('023rd')).toBe(false)
  expect(regex.test('366th')).toBe(false)
})

test('translates days to valid day regexes', () => {
  const tokens = momentTranslator(['DDDD'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('001')).toBe(true)
  expect(regex.test('032')).toBe(true)
  expect(regex.test('056')).toBe(true)
  expect(regex.test('365')).toBe(true)
  expect(regex.test('1')).toBe(false)
  expect(regex.test('01')).toBe(false)
  expect(regex.test('23')).toBe(false)
  expect(regex.test('366')).toBe(false)
})

test('translates day of week', () => {
  const tokens = momentTranslator(['d'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('3')).toBe(true)
  expect(regex.test('6')).toBe(true)
  expect(regex.test('7')).toBe(false)
  expect(regex.test('00')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates day of week with ordinal indicator', () => {
  const tokens = momentTranslator(['do'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('0th')).toBe(true)
  expect(regex.test('1st')).toBe(true)
  expect(regex.test('4th')).toBe(true)
  expect(regex.test('6th')).toBe(true)
  expect(regex.test('7th')).toBe(false)
  expect(regex.test('00th')).toBe(false)
  expect(regex.test('01st')).toBe(false)
})

test('translates day of week', () => {
  const tokens = momentTranslator(['dd'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('Su')).toBe(true)
  expect(regex.test('Mo')).toBe(true)
  expect(regex.test('Th')).toBe(true)
  expect(regex.test('Sa')).toBe(true)
  expect(regex.test('Ma')).toBe(false)
  expect(regex.test('Te')).toBe(false)
})

test('translates day of week', () => {
  const tokens = momentTranslator(['ddd'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('Tue')).toBe(true)
  expect(regex.test('Wed')).toBe(true)
  expect(regex.test('Thu')).toBe(true)
  expect(regex.test('Sat')).toBe(true)
  expect(regex.test('Sam')).toBe(false)
  expect(regex.test('Man')).toBe(false)
})

test('translates day of week', () => {
  const tokens = momentTranslator(['dddd'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('Sunday')).toBe(true)
  expect(regex.test('Monday')).toBe(true)
  expect(regex.test('Wednesday')).toBe(true)
  expect(regex.test('Friday')).toBe(true)
  expect(regex.test('Fri')).toBe(false)
  expect(regex.test('Fridat')).toBe(false)
})

test('translates day of week (Locale)', () => {
  const tokens = momentTranslator(['e'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('2')).toBe(true)
  expect(regex.test('6')).toBe(true)
  expect(regex.test('7')).toBe(false)
  expect(regex.test('00')).toBe(false)
  expect(regex.test('03')).toBe(false)
})

test('translates day of week (ISO)', () => {
  const tokens = momentTranslator(['E'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('4')).toBe(true)
  expect(regex.test('7')).toBe(true)
  expect(regex.test('8')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates week of year', () => {
  const tokens = momentTranslator(['w'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('14')).toBe(true)
  expect(regex.test('38')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates week of year with ordinal', () => {
  const tokens = momentTranslator(['wo'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('22nd')).toBe(true)
  expect(regex.test('41st')).toBe(true)
  expect(regex.test('53rd')).toBe(true)
  expect(regex.test('54th')).toBe(false)
  expect(regex.test('02nd')).toBe(false)
})

test('translates week of year with ordinal', () => {
  const tokens = momentTranslator(['ww'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('06')).toBe(true)
  expect(regex.test('09')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('1')).toBe(false)
})

test('translates week of year', () => {
  const tokens = momentTranslator(['W'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('14')).toBe(true)
  expect(regex.test('38')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates week of year with ordinal', () => {
  const tokens = momentTranslator(['Wo'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('22nd')).toBe(true)
  expect(regex.test('41st')).toBe(true)
  expect(regex.test('53rd')).toBe(true)
  expect(regex.test('54th')).toBe(false)
  expect(regex.test('02nd')).toBe(false)
})

test('translates week of year with ordinal', () => {
  const tokens = momentTranslator(['WW'])
  const regex = new RegExp('^' + tokens[0] + '$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('06')).toBe(true)
  expect(regex.test('09')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('1')).toBe(false)
})

test('throws when provided bad tokens', () => {
  expect(() => momentTranslator(['INVALID_TOKEN']))
    .toThrow()
})