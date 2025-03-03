const { getRickAndMortyCharacters } = require('../../index')
const {characteres} =require("../../mockedCharacteres")

describe('getRickAndMortyCharacters', () => {
  test('the data is peanut butter', async () => {
    const data = await getRickAndMortyCharacters();
    expect(data).toEqual(characteres);
  });
})
