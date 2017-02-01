export const fetchAllPokemon = () => (
  $.ajax({ type:'GET', url: 'api/pokemon' })
);

export const fetchPokemon = (id) => (
  $.ajax({ type: 'GET', url: `api/pokemon/${id}` })
);

export const createPokemon = (pokemonParams) => (
  $.ajax({ type: 'POST', url: 'api/pokemon', data: { pokemon: pokemonParams}})
);
