import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';

import { receiveTodos } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", function(){
  window.store = configureStore();  // REMOVE LATER
  window.receiveTodos = receiveTodos; // REMOVE LATER
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
