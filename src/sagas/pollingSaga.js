import { put } from 'redux-saga/effects';
import { all, call, takeEvery } from '@redux-saga/core/effects';
import { pokemonAPI } from '../api/api';
import * as TYPES from '../redux/Type';
import * as ACTIONS from '../redux/Actions';


function* getPokemonsAsync() {
  const pokemons = yield call(pokemonAPI.getPokemonsFromBackend);
  const pokemonDetails = yield all(pokemons.results
    .map((pokemon) => call(pokemonAPI.getPokemonDetails, pokemon.name)));
  const pokemonDetailsAndAbilities = yield all(pokemonDetails.map((pokemon) => {
    const abilities = () => call(pokemonAPI.getPokemonAbilities, pokemon.name);
    return pokemon.abilities = abilities();
  }));
  yield put(ACTIONS.setPokemons(pokemonDetailsAndAbilities));
}

export function* watchGetPokemons() {
  yield takeEvery(TYPES.FETCH_POKEMONS, getPokemonsAsync);
}
