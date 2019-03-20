export function lookupTranslator(lookup: { [token: string]: string }) {
  return (tokens: string[]) => {
    return tokens.map(token => lookup[token] || token)
  }
}

export function getNumbers(start: number, end: number) {
  const numbers = []

  for (let i = start; i <= end; i++) {
    numbers.push(i)
  }

  return numbers
}

export function getNumbersWithOrdinalIndicators(start: number, end: number) {
  return getNumbers(start, end).map(i => i + getOrdinalIndicator(i))
}

function getOrdinalIndicator(num: number) {
  if (num % 10 === 1 && num % 100 !== 11) {
    return 'st'
  }
  if (num % 10 === 2 && num % 100 !== 12) {
    return 'nd'
  }
  if (num % 10 === 3 && num % 100 !== 13) {
    return 'rd'
  }

  return 'th'
}
