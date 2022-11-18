const pokemonList = document.getElementById('pokemon-list')

function convertPokemonToHtml (pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      <div>
        <div class="details">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
      </div>
    </li>
  `
}

pokeApi.getPokemons().then((pokemons = []) => {
  const pokemonMapList = pokemons.map(pokemon => {
    return convertPokemonToHtml(pokemon)
  })
  const newHtml = pokemonMapList.join("")
  console.log(newHtml)
  pokemonList.innerHTML = newHtml
})
 .catch(error => {
  console.log(error)
 })
 .finally(() => {
  console.log("Requisição concluída")
 })
