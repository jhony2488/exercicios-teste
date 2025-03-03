async function getRickAndMortyCharacters() {
  let response = null

  await fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      response = data.results.map((itemResponse) => {
        return {
          nome: itemResponse.name,
          genero: itemResponse.gender,
          avatar: itemResponse.image,
          especie: itemResponse.species,
        }
      })
    })
    .catch((error) => console.error('Erro:', error))

  return response
}

module.exports = getRickAndMortyCharacters
