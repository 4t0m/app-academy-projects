import React from 'react';
import { Link } from 'react-router';
import HeaderLoginFormContainer from './header_login_form_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const signedInHeader = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.fname}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Header = ({ currentUser, login, logout }) => {
  if(currentUser){
    return signedInHeader(currentUser, logout);
  } else {
    return <HeaderLoginFormContainer login={login}/>;
  }
};

export default Header;
