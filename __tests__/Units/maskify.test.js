const { maskify } = require('../../index')

describe('maskify', () => {
  test('should mask the strings, showing only the last 4 characters', () => {
    expect(maskify('81994880190')).toBe('#######0190')
  })

  test('the value without mask must be returned if the number of characters in the string is equal to 4', () => {
    expect(maskify('0190')).toBe('0190')
  })

  test('the value without mask must be returned if the number of characters in the string is less than 4', () => {
    expect(maskify('190')).toBe('190')
  })
})
