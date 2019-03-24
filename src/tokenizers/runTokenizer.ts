/**
 * runTokenizer tokenizes a string into a series of continuous character runs
 *
 * E.g. MMDDYYYY becomes [MM,DD,YYYY]
 */

import { DrbTokenizer } from './index'

export const runTokenizer: DrbTokenizer = (input: string) => {
  if (input.length === 0) {
    return []
  }

  const tokens: string[] = []
  let start = 0
  let end

  for (end = 1; end < input.length; end++) {
    if (input[start] !== input[end]) {
      tokens.push(input.slice(start, end))
      start = end
    }
  }

  tokens.push(input.slice(start, end))

  return tokens
}
