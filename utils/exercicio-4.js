function checkIfTheFirstLetterIsUppercase(word) {
  if (!word || word.length == 0 || /^[0-9]+$/.test(word)) 
    return false

  return word.charAt(0) === word.charAt(0).toUpperCase()
}

module.exports = checkIfTheFirstLetterIsUppercase
