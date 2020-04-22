import * as TYPES from '../Type';

const initState = {
  pokemons: [],
  pokemonAbility: null,
  searchBar: '',
};
const pokemonPageReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_POKEMONS: {
      return { ...state };
    }
    case TYPES.SET_POKEMONS: {
      return {
        ...state,
        pokemons: action.data,
      };
    }
    case TYPES.SET_SEARCH_BAR: {
      return {
        ...state,
        searchBar: action.text,
      };
    }
    case TYPES.SET_POKEMON_ABILITY_DETAIL: {
      return {
        ...state,
        pokemonAbility: action.abilityDetail,
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default pokemonPageReducer;
