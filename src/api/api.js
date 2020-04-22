import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});



export const pokemonAPI = {
  getPokemonsFromBackend(offset = 1, limit = 20) {
    return instance.get(`pokemon-form?offset=${offset}&limit=${limit}`)
      .then((response) => response.data);
  },
  getPokemonDetails(name) {
    return instance.get(`pokemon-form/${name}`)
      .then((response) =>  response.data)
  },
  getPokemonAbilities(name) {
    return instance.get(`pokemon/${name}`)
      .then((response) => response.data)
  },
  getAbilityDetails(abilityName) {
    return instance.get(`ability/${abilityName}`)
      .then((response) => response.data)
  },
};
