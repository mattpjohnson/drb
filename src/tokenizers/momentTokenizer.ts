import { DrbTokenizer } from './index'
import { runTokenizer } from './runTokenizer'

export const momentTokenizer: DrbTokenizer = (input: string) => {
  return fixTokensWithOrdinals(runTokenizer(input))
}

// runTokenizer doesn't account for tokens with ordinals like "Do" and "Mo
// This function combines any tokens with their ordinals
function fixTokensWithOrdinals(tokens: string[]) {
  const tokensWithOrdinals = ['DDD', 'D', 'd', 'M', 'Q', 'w', 'W']

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (tokensWithOrdinals.indexOf(token) !== -1 && tokens[i + 1] === 'o') {
      tokens.splice(i, 2, token + 'o')
    }
  }

  return tokens
}
