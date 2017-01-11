import React from 'react';
import { Link } from 'react-router';
// import LoginFormContainer from './login_form_container';
import SignedInHeaderContainer from './signed_in_header_container';


const Header = ({ currentUser, login, logout }) => {
  if(currentUser){
    return <SignedInHeaderContainer logout={logout}/>;
  } else {
    return <LoginFormContainer login={login}/>;
  }
};

export default Header;
