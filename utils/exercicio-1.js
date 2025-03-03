function maskify(value) {
  if (value.length <= 4) {
    return value
  }

  return value.slice(0, -4).replace(/./g, '#') + value.slice(-4)
}

module.exports = maskify;