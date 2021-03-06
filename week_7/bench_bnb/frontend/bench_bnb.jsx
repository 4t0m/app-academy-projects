import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    //TODO Remove below
    window.store = store;
    window.login = SessionApiUtil.login;
    window.signup = SessionApiUtil.signup;
    window.logout = SessionApiUtil.logout;

    ReactDOM.render(<Root store={ store } />, root);
});
