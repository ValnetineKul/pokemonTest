import * as TYPES from './Type';
import { pokemonAPI } from '../api/api';

export const fetchPokemonsActions = () => ({ type: TYPES.FETCH_POKEMONS });
export const setPokemons = (data) => ({ type: TYPES.SET_POKEMONS, data });
export const setSearchBar = (text) => ({ type: TYPES.SET_SEARCH_BAR, text });
export const setPokemonAbilityDetails = (abilityDetail) => ({
  type: TYPES.SET_POKEMON_ABILITY_DETAIL,
  abilityDetail,
});


export const fetchPokemonAbilityDetail = (abilityName) => (dispatch) => {
  pokemonAPI.getAbilityDetails(abilityName)
    .then((response) => dispatch(setPokemonAbilityDetails(response)));
};
