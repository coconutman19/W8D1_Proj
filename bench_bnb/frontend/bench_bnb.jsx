import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout, SIGNUP} from './actions/session_actions';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
