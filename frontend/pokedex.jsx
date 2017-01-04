import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions.js';
import { fetchAllPokemon } from './util/api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);

});
