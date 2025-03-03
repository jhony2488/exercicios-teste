const { checkIfTheFirstLetterIsUppercase } = require('../../index')

describe('checkIfTheFirstLetterIsUppercase', () => {
  test('should return false if the string does not have the first letter capitalized', () => {
    expect(checkIfTheFirstLetterIsUppercase('jhony')).toBe(false)
  })

  test('should return true if the string has a capitalized first letter', () => {
    expect(checkIfTheFirstLetterIsUppercase('Jhony')).toBe(true)
  })
})
