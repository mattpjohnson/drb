import { DrbTranslator } from './index'
import { getNumbersWithOrdinalIndicators, lookupTranslator } from './helpers'

const tokenLookup: { [token: string]: string } = {
  M: '([1-9]|1[0-2])',
  Mo: `(${getNumbersWithOrdinalIndicators(1, 12).join('|')})`,
  MM: '(0[1-9]|1[0-2])',
  MMM: '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)',
  MMMM:
    '(January|February|March|April|May|June|July|August|September|October|November|December)',
  Q: '([1-4])',
  Qo: `(${getNumbersWithOrdinalIndicators(1, 4).join('|')})`,
  D: '([1-9]|[1-2][0-9]|3[0-1])',
  Do: `(${getNumbersWithOrdinalIndicators(1, 31).join('|')})`,
  DD: '(0[1-9]|[1-2][0-9]|3[0-1])',
  DDD: '([1-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-5])',
  DDDo: `(${getNumbersWithOrdinalIndicators(1, 365).join('|')})`,
  DDDD: '(00[1-9]|0[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-5])',
  d: '([0-6])',
  do: `(${getNumbersWithOrdinalIndicators(0, 6).join('|')})`,
  dd: '(Su|Mo|Tu|We|Th|Fr|Sa)',
  ddd: '(Sun|Mon|Tue|Wed|Thu|Fri|Sat)',
  dddd: '(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)',
  e: '([0-6])',
  E: '([1-7])',
  w: '([1-9]|[1-4][0-9]|5[0-3])',
  wo: `(${getNumbersWithOrdinalIndicators(1, 53).join('|')})`,
  ww: '(0[1-9]|[1-4][0-9]|5[0-3])',
  W: '([1-9]|[1-4][0-9]|5[0-3])',
  Wo: `(${getNumbersWithOrdinalIndicators(1, 53).join('|')})`,
  WW: '(0[1-9]|[1-4][0-9]|5[0-3])',
  YY: '(\\d{2})',
  YYYY: '(\\d{4})',
}

export const momentTranslator: DrbTranslator = lookupTranslator(tokenLookup)
