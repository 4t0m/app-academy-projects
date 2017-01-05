import React from 'react';

export const PokemonIndexItem = ( { pokemon } ) => {
  return <li>
    <img src={pokemon.image_url} width="30" height="30"></img>
    {pokemon.name}
    </li>;
};
