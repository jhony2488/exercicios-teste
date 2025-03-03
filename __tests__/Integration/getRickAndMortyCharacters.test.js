const { getRickAndMortyCharacters } = require('../../index')
const {characteres} =require("../../mockedCharacteres")

describe('getRickAndMortyCharacters', () => {
  test('check if the request is being made normally', async () => {
    const data = await getRickAndMortyCharacters();
    expect(data).toEqual(characteres);
  });
})
