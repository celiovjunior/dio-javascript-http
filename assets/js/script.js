const pokemonList = document.getElementById('pokemon-list')
function convertPokemonTypesToLi (pokemonTypes) {
  return pokemonTypes.map((typeSlot) => {
    return `<li class="type">${typeSlot.type.name}</li>`
  })
}
function convertPokemonToHtml (pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#00${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
      <div>
        <div class="details">
          <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
          </ol>
          <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
      </div>
    </li>
  `
}

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
})
 .catch(error => {
  console.log(error)
 })
 .finally(() => {
  console.log("Requisição concluída")
 })
 