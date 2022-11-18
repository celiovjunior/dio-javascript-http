const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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

fetch(url)
 .then(res => res.json())
 .then(data => {
   const pokemonArray = data.results
   pokemonArray.forEach((item) => {    
    const pokemonList = document.getElementById('pokemon-list')
    pokemonList.innerHTML += convertPokemonToHtml(item)
    console.log(pokemonList)
   })
  //  debugger  
  })
 .catch(error => {
  console.log(error)
 })
 .finally(() => {
  console.log("Requisição concluída")
 })
