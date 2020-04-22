export const getFilteredPokemons = (state) => state.pokemonPage.pokemons
  .filter((pokemon) => pokemon.name.toLowerCase()
    .includes(state.pokemonPage.searchBar.toLowerCase()));
