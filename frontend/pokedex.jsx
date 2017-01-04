import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions.js';
import { fetchAllPokemon } from './util/api_util.js';
import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  let store = configureStore();
  window.store = store;

  ReactDOM.render(<h1>Pokedex</h1>, rootEl);

});
