import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  //TODO Remove some of this (window asssignments)
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
  window.store = store;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
