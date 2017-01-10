import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  //TODO Remove some of this (window asssignments)
  const store = configureStore();
  window.store = store;
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Facebook Clone</h1>, root);
});
