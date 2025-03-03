

function maskify(value) {
  let getValue = value

  if (getValue.length <= 4) {
    return getValue
  }

  return getValue.slice(0, -4).replace(/./g, '#') + getValue.slice(-4)
}

module.exports = maskify;