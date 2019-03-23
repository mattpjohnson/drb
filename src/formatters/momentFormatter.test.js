const { drb } = require('../index')
const { momentFormatter } = require('./momentFormatter')

const drbMoment = drb(momentFormatter)

test('MM/DD/YYYY is true for valid inputs', () => {
  const validInputs = ['01/28/1800', '07/04/1776', '12/14/2002', '09/31/0029']
  const regex = new RegExp('^' + drbMoment('MM/DD/YYYY') + '$')

  for (const input of validInputs) {
    expect(regex.test(input)).toBe(true)
  }
})

test('MM/DD/YYYY is false for invalid inputs', () => {
  const invalidInputs = [
    '0',
    '22',
    '101',
    'text',
    '13/01/2004',
    '12/32/2004',
    '12/01/203',
  ]
  const regex = new RegExp('^' + drbMoment('MM/DD/YYYY') + '$')

  for (const input of invalidInputs) {
    expect(regex.test(input)).toBe(false)
  }
})

test('MMDDYYYY is true for valid inputs', () => {
  const validInputs = ['02181923', '01042030', '12142002', '09310029']
  const regex = new RegExp('^' + drbMoment('MMDDYYYY') + '$')

  for (const input of validInputs) {
    expect(regex.test(input)).toBe(true)
  }
})

test('MMDDYYYY is false for invalid inputs', () => {
  const invalidInputs = [
    '0',
    '22',
    '101',
    'text',
    '12/01/2004',
    '12322004',
    '1201203',
    '100820009',
  ]
  const regex = new RegExp('^' + drbMoment('MMDDYYYY') + '$')

  for (const input of invalidInputs) {
    expect(regex.test(input)).toBe(false)
  }
})

test('dddd, MMMM Do YYYY, h:mm:ss a', () => {
  const regex = new RegExp(
    '^' + drbMoment('dddd, MMMM Do YYYY, h:mm:ss a') + '$'
  )

  expect(regex.test('Sunday, February 14th 2010, 3:25:50 pm')).toBe(true)
})

test('ddd, hA', () => {
  const regex = new RegExp('^' + drbMoment('ddd, hA') + '$')

  expect(regex.test('Sun, 3PM')).toBe(true)
})

test('ddd MMM DD YYYY HH: mm: SS zz ZZ', () => {
  const regex = new RegExp(
    '^' + drbMoment('ddd MMM DD YYYY HH: mm: SS zz ZZ') + '$'
  )

  expect(regex.test('Fri Mar 22 2019 21: 28: 20 GMT -0700')).toBe(true)
})

test('ddd, DD MMM YYYY HH: mm: SS ZZ', () => {
  const regex = new RegExp(
    '^' + drbMoment('ddd, DD MMM YYYY HH: mm: SS ZZ') + '$'
  )

  expect(regex.test('Fri, 09 Sep 2005 13: 51: 39 -0700')).toBe(true)
})

test('Mo, Qo, Do, DDDo, do, wo, Wo', () => {
  const regex = new RegExp(
    '^' + drbMoment('Mo, Qo, Do, DDDo, do, wo, Wo') + '$'
  )

  expect(regex.test('12th, 3rd, 22nd, 257th, 0th, 52nd, 43rd')).toBe(true)
})

test('YYYY-MM-DD zz', () => {
  const regex = new RegExp('^' + drbMoment('YYYY-MM-DD zz') + '$')

  expect(regex.test('2000-01-01 UTC')).toBe(true)
})

test('YYYY-MM-DD zz SSSSSSSSS', () => {
  const regex = new RegExp('^' + drbMoment('YYYY-MM-DD zz SSSSSSSSS') + '$')

  expect(regex.test('1970-01-01 UTC 946684800')).toBe(true)
})

test('YYYY-MM-DD HH:mm:ss ZZ', () => {
  const regex = new RegExp('^' + drbMoment('YYYY-MM-DD HH:mm:ss ZZ') + '$')
  expect(regex.test('2012-06-30 23:59:59 +0000')).toBe(true)
})
