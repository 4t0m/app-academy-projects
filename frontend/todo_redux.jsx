import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", function(){
  window.store = configureStore;  // REMOVE LATER
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
