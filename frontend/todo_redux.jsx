import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", function(){
  window.store = allTodos(configureStore.getState());  // REMOVE LATER
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
