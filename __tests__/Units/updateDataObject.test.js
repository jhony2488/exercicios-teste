const { updateDataObject } = require('../../index')

describe('updateDataObject', () => {
  test('should update the object values', () => {
    expect(
      updateDataObject(
        { name: 'Marcos', country: 'Brasil', age: 22 },
        { country: 'Japão', age: 33 }
      )
    ).toEqual({ age: 33, country: 'Japão', name: 'Marcos' })
  })

  test('must not change or add any other parameters to the object if the new object only has parameters that the current object does not have', () => {
    expect(
      updateDataObject(
        { name: 'Marcos', country: 'Brasil', age: 22 },
        { price: 89.9, amount: 15, description: 'camiseta 100% algodão' }
      )
    ).toEqual({ age: 22, country: 'Brasil', name: 'Marcos' })
  })

  test('should update the object values without adding new parameters', () => {
    expect(
      updateDataObject(
        { name: 'Rafael', country: 'Chile', age: 42 },
        { name: 'Camiseta Polo', price: 59.9, amount: 30 }
      )
    ).toEqual({ age: 42, country: 'Chile', name: 'Camiseta Polo' })
  })
})
