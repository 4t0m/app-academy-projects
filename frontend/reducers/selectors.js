import { values } from 'lodash';

export const selectAllPokemon = state => (
  values(state.pokemon)
);

export const selectPokemonItem = (state, itemId) => {
  let selectedItem;
  if (state.pokemonDetail.items) {
    state.pokemonDetail.items.forEach(item => {
      if (item.id == itemId) {
        selectedItem = item;
      }
    });

  }

  return selectedItem;
};
