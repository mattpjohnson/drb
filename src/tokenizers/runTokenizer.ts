/**
 * runTokenizer tokenizes a string into a series of continuous character runs
 *
 * E.g. MMDDYYYY becomes [MM,DD,YYYY]
 */

import { DrbTokenizer } from './index'

// TODO(mattpjohnson): Refactor. Probably using index pointers would be cleaner
export const runTokenizer: DrbTokenizer = (input: string) => {
  const tokens: string[] = []

  if (input.length === 0) {
    return tokens
  }

  let currentToken = input[0]
  for (let i = 1; i < input.length; i++) {
    const letter = input[i]

    if (letter !== currentToken[0]) {
      tokens.push(currentToken)
      currentToken = ''
    }

    currentToken += letter
  }

  tokens.push(currentToken)

  return tokens
}
