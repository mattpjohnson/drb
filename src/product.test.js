const { product } = require('./product')

test('multiplies 2 * 3 to equal 6', () => {
  expect(product(2, 3)).toBe(6)
})
