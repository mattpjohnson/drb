const { momentTranslator } = require('./momentTranslator')

test('translates months (M)', () => {
  const tokens = momentTranslator(['M'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('12')).toBe(true)
  expect(regex.test('13')).toBe(false)
  expect(regex.test('3')).toBe(true)
})

test('translates months with ordinal (Mo)', () => {
  const tokens = momentTranslator(['Mo'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('12th')).toBe(true)
  expect(regex.test('13th')).toBe(false)
  expect(regex.test('3rd')).toBe(true)
  expect(regex.test('4th')).toBe(true)
  expect(regex.test('3th')).toBe(false)
})

test('translates 2 digit months (MM)', () => {
  const tokens = momentTranslator(['MM'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('07')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('13')).toBe(false)
  expect(regex.test('123')).toBe(false)
  expect(regex.test('3')).toBe(false)
})

test('translates 3 character month names (MMM)', () => {
  const tokens = momentTranslator(['MMM'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Jan')).toBe(true)
  expect(regex.test('Jul')).toBe(true)
  expect(regex.test('Jut')).toBe(false)
  expect(regex.test('Aug')).toBe(true)
})

test('translates full month names (MMMM)', () => {
  const tokens = momentTranslator(['MMMM'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('February')).toBe(true)
  expect(regex.test('March')).toBe(true)
  expect(regex.test('Marty')).toBe(false)
})

test('translates quarter of the year (Q)', () => {
  const tokens = momentTranslator(['Q'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('2')).toBe(true)
  expect(regex.test('3')).toBe(true)
  expect(regex.test('4')).toBe(true)
  expect(regex.test('5')).toBe(false)
  expect(regex.test('0')).toBe(false)
})

test('translates quarter of the year with ordinal (Qo)', () => {
  const tokens = momentTranslator(['Qo'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('2nd')).toBe(true)
  expect(regex.test('3rd')).toBe(true)
  expect(regex.test('4th')).toBe(true)
  expect(regex.test('5th')).toBe(false)
  expect(regex.test('0st')).toBe(false)
})

test('translates day of the month (D)', () => {
  const tokens = momentTranslator(['D'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('23')).toBe(true)
  expect(regex.test('31')).toBe(true)
  expect(regex.test('01')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('32')).toBe(false)
})

test('translates day of the month with ordinal (Do)', () => {
  const tokens = momentTranslator(['Do'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

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

test('translates 2 digit day of the month (DD)', () => {
  const tokens = momentTranslator(['DD'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('23')).toBe(true)
  expect(regex.test('31')).toBe(true)
  expect(regex.test('1')).toBe(false)
  expect(regex.test('32')).toBe(false)
})

test('translates day of the year (DDD)', () => {
  const tokens = momentTranslator(['DDD'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('32')).toBe(true)
  expect(regex.test('56')).toBe(true)
  expect(regex.test('365')).toBe(true)
  expect(regex.test('01')).toBe(false)
  expect(regex.test('023')).toBe(false)
  expect(regex.test('366')).toBe(false)
})

test('translates day of the year with ordinal (DDDo)', () => {
  const tokens = momentTranslator(['DDDo'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('32nd')).toBe(true)
  expect(regex.test('56th')).toBe(true)
  expect(regex.test('132nd')).toBe(true)
  expect(regex.test('365th')).toBe(true)
  expect(regex.test('01st')).toBe(false)
  expect(regex.test('023rd')).toBe(false)
  expect(regex.test('366th')).toBe(false)
})

test('translates 3 digit day of the year (DDDD)', () => {
  const tokens = momentTranslator(['DDDD'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('001')).toBe(true)
  expect(regex.test('032')).toBe(true)
  expect(regex.test('056')).toBe(true)
  expect(regex.test('365')).toBe(true)
  expect(regex.test('1')).toBe(false)
  expect(regex.test('01')).toBe(false)
  expect(regex.test('23')).toBe(false)
  expect(regex.test('366')).toBe(false)
})

test('translates 0-indexed day of week (d)', () => {
  const tokens = momentTranslator(['d'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('3')).toBe(true)
  expect(regex.test('6')).toBe(true)
  expect(regex.test('7')).toBe(false)
  expect(regex.test('00')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates 0-indexed day of week with ordinal (do)', () => {
  const tokens = momentTranslator(['do'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0th')).toBe(true)
  expect(regex.test('1st')).toBe(true)
  expect(regex.test('4th')).toBe(true)
  expect(regex.test('6th')).toBe(true)
  expect(regex.test('7th')).toBe(false)
  expect(regex.test('00th')).toBe(false)
  expect(regex.test('01st')).toBe(false)
})

test('translates day of week (dd)', () => {
  const tokens = momentTranslator(['dd'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Su')).toBe(true)
  expect(regex.test('Mo')).toBe(true)
  expect(regex.test('Th')).toBe(true)
  expect(regex.test('Sa')).toBe(true)
  expect(regex.test('Ma')).toBe(false)
  expect(regex.test('Te')).toBe(false)
})

test('translates day of week (ddd)', () => {
  const tokens = momentTranslator(['ddd'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Tue')).toBe(true)
  expect(regex.test('Wed')).toBe(true)
  expect(regex.test('Thu')).toBe(true)
  expect(regex.test('Sat')).toBe(true)
  expect(regex.test('Sam')).toBe(false)
  expect(regex.test('Man')).toBe(false)
})

test('translates day of week (dddd)', () => {
  const tokens = momentTranslator(['dddd'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Sunday')).toBe(true)
  expect(regex.test('Monday')).toBe(true)
  expect(regex.test('Wednesday')).toBe(true)
  expect(regex.test('Friday')).toBe(true)
  expect(regex.test('Fri')).toBe(false)
  expect(regex.test('Fridat')).toBe(false)
})

test('translates day of week (Locale) (e)', () => {
  const tokens = momentTranslator(['e'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('2')).toBe(true)
  expect(regex.test('6')).toBe(true)
  expect(regex.test('7')).toBe(false)
  expect(regex.test('00')).toBe(false)
  expect(regex.test('03')).toBe(false)
})

test('translates day of week (ISO) (E)', () => {
  const tokens = momentTranslator(['E'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('4')).toBe(true)
  expect(regex.test('7')).toBe(true)
  expect(regex.test('8')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates week of year (w)', () => {
  const tokens = momentTranslator(['w'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('14')).toBe(true)
  expect(regex.test('38')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates week of year with ordinal', () => {
  const tokens = momentTranslator(['wo'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('22nd')).toBe(true)
  expect(regex.test('41st')).toBe(true)
  expect(regex.test('53rd')).toBe(true)
  expect(regex.test('54th')).toBe(false)
  expect(regex.test('02nd')).toBe(false)
})

test('translates 2 digit week of year (ww)', () => {
  const tokens = momentTranslator(['ww'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('06')).toBe(true)
  expect(regex.test('09')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('1')).toBe(false)
})

test('translates week of year (W)', () => {
  const tokens = momentTranslator(['W'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('14')).toBe(true)
  expect(regex.test('38')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('01')).toBe(false)
})

test('translates week of year with ordinal (Wo)', () => {
  const tokens = momentTranslator(['Wo'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1st')).toBe(true)
  expect(regex.test('22nd')).toBe(true)
  expect(regex.test('41st')).toBe(true)
  expect(regex.test('53rd')).toBe(true)
  expect(regex.test('54th')).toBe(false)
  expect(regex.test('02nd')).toBe(false)
})

test('translates 2 digit week of year (WW)', () => {
  const tokens = momentTranslator(['WW'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('06')).toBe(true)
  expect(regex.test('09')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('54')).toBe(false)
  expect(regex.test('1')).toBe(false)
})

test('translates 2 digit year (YY)', () => {
  const tokens = momentTranslator(['YY'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('36')).toBe(true)
  expect(regex.test('99')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('9')).toBe(false)
  expect(regex.test('118')).toBe(false)
})

test('translates 4 digit year (YYYY)', () => {
  const tokens = momentTranslator(['YYYY'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('2000')).toBe(true)
  expect(regex.test('3016')).toBe(true)
  expect(regex.test('2899')).toBe(true)
  expect(regex.test('1653')).toBe(true)
  expect(regex.test('209')).toBe(false)
  expect(regex.test('11875')).toBe(false)
  expect(regex.test('+11875')).toBe(false)
})

test('translates 4+ digit year (Y)', () => {
  const tokens = momentTranslator(['Y'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1987')).toBe(true)
  expect(regex.test('2019')).toBe(true)
  expect(regex.test('3120')).toBe(true)
  expect(regex.test('9876')).toBe(true)
  expect(regex.test('123')).toBe(false)
  expect(regex.test('11875')).toBe(false)
  expect(regex.test('+11875')).toBe(true)
  expect(regex.test('435671')).toBe(false)
  expect(regex.test('+435671')).toBe(true)
  expect(regex.test('+2019')).toBe(false)
})

test('translates 2 digit week year (gg)', () => {
  const tokens = momentTranslator(['gg'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('36')).toBe(true)
  expect(regex.test('99')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('9')).toBe(false)
  expect(regex.test('118')).toBe(false)
})

test('translates 4 digit week year (gggg)', () => {
  const tokens = momentTranslator(['gggg'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('2000')).toBe(true)
  expect(regex.test('3016')).toBe(true)
  expect(regex.test('2899')).toBe(true)
  expect(regex.test('1653')).toBe(true)
  expect(regex.test('209')).toBe(false)
  expect(regex.test('11875')).toBe(false)
  expect(regex.test('+11875')).toBe(false)
})

test('translates 2 digit week year (ISO) (GG)', () => {
  const tokens = momentTranslator(['GG'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('36')).toBe(true)
  expect(regex.test('99')).toBe(true)
  expect(regex.test('53')).toBe(true)
  expect(regex.test('9')).toBe(false)
  expect(regex.test('118')).toBe(false)
})

test('translates 4 digit week year (ISO) (GGGG)', () => {
  const tokens = momentTranslator(['GGGG'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('2000')).toBe(true)
  expect(regex.test('3016')).toBe(true)
  expect(regex.test('2899')).toBe(true)
  expect(regex.test('1653')).toBe(true)
  expect(regex.test('209')).toBe(false)
  expect(regex.test('11875')).toBe(false)
  expect(regex.test('+11875')).toBe(false)
})

test('translates AM/PM (A)', () => {
  const tokens = momentTranslator(['A'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('AM')).toBe(true)
  expect(regex.test('PM')).toBe(true)
  expect(regex.test('am')).toBe(false)
  expect(regex.test('pm')).toBe(false)
  expect(regex.test('AT')).toBe(false)
})

test('translates am/pm (a)', () => {
  const tokens = momentTranslator(['a'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('am')).toBe(true)
  expect(regex.test('pm')).toBe(true)
  expect(regex.test('AM')).toBe(false)
  expect(regex.test('PM')).toBe(false)
  expect(regex.test('at')).toBe(false)
})

test('translates 0-indexed, 24-hour hour (H)', () => {
  const tokens = momentTranslator(['H'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('8')).toBe(true)
  expect(regex.test('23')).toBe(true)
  expect(regex.test('24')).toBe(false)
  expect(regex.test('06')).toBe(false)
  expect(regex.test('123')).toBe(false)
})

test('translates 0-indexed, 2 digit, 24-hour hour (HH)', () => {
  const tokens = momentTranslator(['HH'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('04')).toBe(true)
  expect(regex.test('23')).toBe(true)
  expect(regex.test('24')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('123')).toBe(false)
})

test('translates 1-indexed, 12-hour hour (h)', () => {
  const tokens = momentTranslator(['h'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('8')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('13')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('06')).toBe(false)
  expect(regex.test('121')).toBe(false)
})

test('translates 1-indexed, 2 digit, 12-hour hour (hh)', () => {
  const tokens = momentTranslator(['hh'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('04')).toBe(true)
  expect(regex.test('12')).toBe(true)
  expect(regex.test('13')).toBe(false)
  expect(regex.test('00')).toBe(false)
  expect(regex.test('4')).toBe(false)
  expect(regex.test('121')).toBe(false)
})

test('translates 1-indexed, 24-hour hour (k)', () => {
  const tokens = momentTranslator(['k'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('1')).toBe(true)
  expect(regex.test('4')).toBe(true)
  expect(regex.test('13')).toBe(true)
  expect(regex.test('24')).toBe(true)
  expect(regex.test('25')).toBe(false)
  expect(regex.test('0')).toBe(false)
  expect(regex.test('04')).toBe(false)
  expect(regex.test('121')).toBe(false)
})

test('translates 1-indexed, 2 digit, 24-hour hour (kk)', () => {
  const tokens = momentTranslator(['kk'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('01')).toBe(true)
  expect(regex.test('04')).toBe(true)
  expect(regex.test('13')).toBe(true)
  expect(regex.test('24')).toBe(true)
  expect(regex.test('25')).toBe(false)
  expect(regex.test('00')).toBe(false)
  expect(regex.test('4')).toBe(false)
  expect(regex.test('121')).toBe(false)
})

test('translates 0-indexed minute (m)', () => {
  const tokens = momentTranslator(['m'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('7')).toBe(true)
  expect(regex.test('43')).toBe(true)
  expect(regex.test('59')).toBe(true)
  expect(regex.test('60')).toBe(false)
  expect(regex.test('07')).toBe(false)
})

test('translates 0-indexed, 2 digit minute (mm)', () => {
  const tokens = momentTranslator(['mm'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('07')).toBe(true)
  expect(regex.test('43')).toBe(true)
  expect(regex.test('59')).toBe(true)
  expect(regex.test('60')).toBe(false)
  expect(regex.test('7')).toBe(false)
})

test('translates 0-indexed second (s)', () => {
  const tokens = momentTranslator(['s'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('7')).toBe(true)
  expect(regex.test('43')).toBe(true)
  expect(regex.test('59')).toBe(true)
  expect(regex.test('60')).toBe(false)
  expect(regex.test('07')).toBe(false)
})

test('translates 0-indexed, 2 digit second (ss)', () => {
  const tokens = momentTranslator(['ss'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('07')).toBe(true)
  expect(regex.test('43')).toBe(true)
  expect(regex.test('59')).toBe(true)
  expect(regex.test('60')).toBe(false)
  expect(regex.test('7')).toBe(false)
})

test('translates 1 digit fractional second (S)', () => {
  const tokens = momentTranslator(['S'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0')).toBe(true)
  expect(regex.test('7')).toBe(true)
  expect(regex.test('9')).toBe(true)
  expect(regex.test('10')).toBe(false)
  expect(regex.test('08')).toBe(false)
})

test('translates 2 digit fractional second (SS)', () => {
  const tokens = momentTranslator(['SS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00')).toBe(true)
  expect(regex.test('07')).toBe(true)
  expect(regex.test('99')).toBe(true)
  expect(regex.test('100')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates 3 digit fractional second (SSS)', () => {
  const tokens = momentTranslator(['SSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('000')).toBe(true)
  expect(regex.test('007')).toBe(true)
  expect(regex.test('487')).toBe(true)
  expect(regex.test('999')).toBe(true)
  expect(regex.test('1000')).toBe(false)
  expect(regex.test('8')).toBe(false)
  expect(regex.test('80')).toBe(false)
  expect(regex.test('08')).toBe(false)
})

test('translates 4 digit fractional second (SSSS)', () => {
  const tokens = momentTranslator(['SSSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0000')).toBe(true)
  expect(regex.test('0007')).toBe(true)
  expect(regex.test('2834')).toBe(true)
  expect(regex.test('9999')).toBe(true)
  expect(regex.test('10000')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates 5 digit fractional second (SSSSS)', () => {
  const tokens = momentTranslator(['SSSSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00000')).toBe(true)
  expect(regex.test('00007')).toBe(true)
  expect(regex.test('45687')).toBe(true)
  expect(regex.test('99999')).toBe(true)
  expect(regex.test('100000')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates 6 digit fractional second (SSSSSS)', () => {
  const tokens = momentTranslator(['SSSSSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('000000')).toBe(true)
  expect(regex.test('000007')).toBe(true)
  expect(regex.test('773845')).toBe(true)
  expect(regex.test('999999')).toBe(true)
  expect(regex.test('1000000')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates 7 digit fractional second (SSSSSSS)', () => {
  const tokens = momentTranslator(['SSSSSSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0000000')).toBe(true)
  expect(regex.test('0000007')).toBe(true)
  expect(regex.test('4384757')).toBe(true)
  expect(regex.test('9999999')).toBe(true)
  expect(regex.test('10000000')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates 8 digit fractional second (SSSSSSSS)', () => {
  const tokens = momentTranslator(['SSSSSSSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('00000000')).toBe(true)
  expect(regex.test('00000007')).toBe(true)
  expect(regex.test('28475637')).toBe(true)
  expect(regex.test('99999999')).toBe(true)
  expect(regex.test('100000000')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates 9 digit fractional second (SSSSSSSSS)', () => {
  const tokens = momentTranslator(['SSSSSSSSS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('000000000')).toBe(true)
  expect(regex.test('000000007')).toBe(true)
  expect(regex.test('456434587')).toBe(true)
  expect(regex.test('999999999')).toBe(true)
  expect(regex.test('1000000000')).toBe(false)
  expect(regex.test('8')).toBe(false)
})

test('translates time zone (z)', () => {
  const tokens = momentTranslator(['z'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('EST')).toBe(true)
  expect(regex.test('CST')).toBe(true)
  expect(regex.test('MST')).toBe(true)
  expect(regex.test('PST')).toBe(true)
  expect(regex.test('POT')).toBe(false)
  expect(regex.test('ET')).toBe(false)
})

test('translates time zone (zz)', () => {
  const tokens = momentTranslator(['zz'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('EST')).toBe(true)
  expect(regex.test('CST')).toBe(true)
  expect(regex.test('MST')).toBe(true)
  expect(regex.test('PST')).toBe(true)
  expect(regex.test('POT')).toBe(false)
  expect(regex.test('ET')).toBe(false)
})

test('translates 4 digit time zone (Z)', () => {
  const tokens = momentTranslator(['Z'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('+04:00')).toBe(true)
  expect(regex.test('+00:00')).toBe(true)
  expect(regex.test('+12:00')).toBe(true)
  expect(regex.test('-12:00')).toBe(true)
  expect(regex.test('+13:00')).toBe(false)
  expect(regex.test('-13:00')).toBe(false)
  expect(regex.test('+4:00')).toBe(false)
})

test('translates 4 digit time zone (ZZ)', () => {
  const tokens = momentTranslator(['ZZ'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('+0400')).toBe(true)
  expect(regex.test('+0000')).toBe(true)
  expect(regex.test('+1200')).toBe(true)
  expect(regex.test('-1200')).toBe(true)
  expect(regex.test('+1300')).toBe(false)
  expect(regex.test('-1300')).toBe(false)
  expect(regex.test('+400')).toBe(false)
})

test('translates unix timestamp (X)', () => {
  const tokens = momentTranslator(['X'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0000000000')).toBe(true)
  expect(regex.test('0000013296')).toBe(true)
  expect(regex.test('1360013296')).toBe(true)
  expect(regex.test('1553308383')).toBe(true)
  expect(regex.test('2057483647')).toBe(true)
  expect(regex.test('2099999999')).toBe(true)
  expect(regex.test('2147483647')).toBe(true)
  expect(regex.test('2147483648')).toBe(false)
  expect(regex.test('21474836')).toBe(false)
})

test('translates unix timestamp (x)', () => {
  const tokens = momentTranslator(['x'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('0000000000000')).toBe(true)
  expect(regex.test('0000000013296')).toBe(true)
  expect(regex.test('1360013296123')).toBe(true)
  expect(regex.test('1553308323483')).toBe(true)
  expect(regex.test('2057482343647')).toBe(true)
  expect(regex.test('2099999999999')).toBe(true)
  expect(regex.test('2147483647000')).toBe(true)
  expect(regex.test('2147483647001')).toBe(false)
  expect(regex.test('21474836')).toBe(false)
})

test('translates time (LT)', () => {
  const tokens = momentTranslator(['LT'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('8:30 PM')).toBe(true)
  expect(regex.test('6:55 AM')).toBe(true)
  expect(regex.test('1:00 PM')).toBe(true)
  expect(regex.test('0:00 PM')).toBe(false)
  expect(regex.test('01:00 PM')).toBe(false)
  expect(regex.test('1:00')).toBe(false)
})

test('translates time with seconds (LTS)', () => {
  const tokens = momentTranslator(['LTS'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('8:30:00 PM')).toBe(true)
  expect(regex.test('6:55:23 AM')).toBe(true)
  expect(regex.test('1:00:12 PM')).toBe(true)
  expect(regex.test('0:00:00 PM')).toBe(false)
  expect(regex.test('01:00:00 PM')).toBe(false)
  expect(regex.test('1:00:00')).toBe(false)
})

test('translates date (L)', () => {
  const tokens = momentTranslator(['L'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('09/04/1986')).toBe(true)
  expect(regex.test('12/10/2019')).toBe(true)
  expect(regex.test('01/01/2001')).toBe(true)
  expect(regex.test('1/1/2019')).toBe(false)
  expect(regex.test('09/04/86')).toBe(false)
})

test('translates date (l)', () => {
  const tokens = momentTranslator(['l'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('9/4/1986')).toBe(true)
  expect(regex.test('12/10/2019')).toBe(true)
  expect(regex.test('1/1/2001')).toBe(true)
  expect(regex.test('01/01/2019')).toBe(false)
  expect(regex.test('9/4/86')).toBe(false)
})

test('translates date (LL)', () => {
  const tokens = momentTranslator(['LL'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('September 4, 1986')).toBe(true)
  expect(regex.test('January 8, 2017')).toBe(true)
  expect(regex.test('February 31, 2003')).toBe(true)
  expect(regex.test('March 32, 2005')).toBe(false)
  expect(regex.test('March 1, 200')).toBe(false)
})

test('translates date (ll)', () => {
  const tokens = momentTranslator(['ll'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Sep 4, 1986')).toBe(true)
  expect(regex.test('Jan 8, 2017')).toBe(true)
  expect(regex.test('Feb 31, 2003')).toBe(true)
  expect(regex.test('Mar 32, 2005')).toBe(false)
  expect(regex.test('Mar 1, 200')).toBe(false)
})

test('translates date (LLL)', () => {
  const tokens = momentTranslator(['LLL'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('September 4, 1986 8:30 PM')).toBe(true)
  expect(regex.test('January 8, 2017 12:59 AM')).toBe(true)
  expect(regex.test('February 31, 2003 12:00 PM')).toBe(true)
  expect(regex.test('March 32, 2005 6:30 AM')).toBe(false)
  expect(regex.test('March 1, 200 5:23 AM')).toBe(false)
})

test('translates date (lll)', () => {
  const tokens = momentTranslator(['lll'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Sep 4, 1986 3:30 AM')).toBe(true)
  expect(regex.test('Jan 8, 2017 12:45 PM')).toBe(true)
  expect(regex.test('Feb 31, 2003 7:54 PM')).toBe(true)
  expect(regex.test('Mar 32, 2005 8:12 AM')).toBe(false)
  expect(regex.test('Mar 1, 200 11:42 AM')).toBe(false)
})

test('translates date (LLLL)', () => {
  const tokens = momentTranslator(['LLLL'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Monday, September 4, 1986 8:30 PM')).toBe(true)
  expect(regex.test('Tuesday, January 8, 2017 12:59 AM')).toBe(true)
  expect(regex.test('Wednesday, February 31, 2003 12:00 PM')).toBe(true)
  expect(regex.test('Thursday, March 32, 2005 6:30 AM')).toBe(false)
  expect(regex.test('Friday, March 1, 200 5:23 AM')).toBe(false)
})

test('translates date (llll)', () => {
  const tokens = momentTranslator(['llll'])
  const regex = new RegExp('^(' + tokens[0] + ')$')

  expect(regex.test('Mon, Sep 4, 1986 3:30 AM')).toBe(true)
  expect(regex.test('Tue, Jan 8, 2017 12:45 PM')).toBe(true)
  expect(regex.test('Wed, Feb 31, 2003 7:54 PM')).toBe(true)
  expect(regex.test('Thu, Mar 32, 2005 8:12 AM')).toBe(false)
  expect(regex.test('Fri, Mar 1, 200 11:42 AM')).toBe(false)
})