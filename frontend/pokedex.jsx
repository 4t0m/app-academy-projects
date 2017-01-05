import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions.js';
import { receivePokemon, requestPokemon } from './actions/pokemon_actions.js';
import { fetchAllPokemon } from './util/api_util.js';
import { fetchPokemon } from './util/api_util.js';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();

  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  window.receivePokemon = receivePokemon;
  window.fetchPokemon = fetchPokemon;
  window.requestPokemon = requestPokemon;

  window.store = store;

  ReactDOM.render(<Root store={store}/>, rootEl);

});
