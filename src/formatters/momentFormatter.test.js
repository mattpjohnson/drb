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
