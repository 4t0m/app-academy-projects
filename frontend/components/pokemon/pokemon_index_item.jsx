import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ( { pokemon } ) => {
  return <li>
    <Link to="/pokemon/:pokemonId">
    <img src={pokemon.image_url} width="30" height="30"></img>
    {pokemon.name}
    </Link>
    </li>;
};
