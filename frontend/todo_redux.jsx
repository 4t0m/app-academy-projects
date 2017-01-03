import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import Root from './components/root';
import { getTodos } from './util/todo_api_util';

import { receiveTodos } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", function(){
  // window.store = configureStore();  // REMOVE LATER
  // window.receiveTodos = receiveTodos; // REMOVE LATER
  window.getTodos = getTodos;
  ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('content'));
});
