const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url).then(res => res.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .then(pokemons => pokemons.map(pokeApi.getPokemonDetails))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
    .catch(error => console.log(error))
}
