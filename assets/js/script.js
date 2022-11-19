function convertPokemonToHtml (pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number">#00${pokemon.number}</span>
      <span class="name">${pokemon.name.toUpperCase()}</span>
      <div>
        <div class="details">
          <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </div>
    </li>
  `
}
const pokemonList = document.getElementById('pokemon-list')
pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
})
 .catch(error => {
  console.log(error)
 })
 .finally(() => {
  console.log("Requisição concluída")
 })
 