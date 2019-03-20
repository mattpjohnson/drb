import { DrbFormatter } from './formatters/index'

export function drb(formatter: DrbFormatter) {
  return (input: string) => {
    const tokens = formatter.tokenize(input)
    const translated = formatter.translate(tokens)
    return formatter.concat(translated)
  }
}
