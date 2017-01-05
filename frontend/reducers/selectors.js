import { values } from 'lodash';

export const selectAllPokemon = state => (
  values(state.pokemon)
);

export const selectPokemonItem = (state, itemId) => (
  console.log(state)
);
