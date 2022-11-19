const pokemonList = document.getElementById('pokemon-list')
const loadMoreButton = document.getElementById('load-more-btn')
const limit = 5
let offset = 0

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) =>
      `
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
    ).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  loadPokemonItems(offset, limit)
})