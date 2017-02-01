import React from 'react';
import { Link } from 'react-router';

export const ItemIndexItem = ( { item } ) => {
  return <li>
    <Link to={`pokemon/${item.pokemon_id}/item/${item.id}`}>
    <img src={item.image_url} width="30" height="30"></img>
    {item.name}
    </Link>
    </li>;
};
