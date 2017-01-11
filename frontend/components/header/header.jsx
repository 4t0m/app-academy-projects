import React from 'react';
import { Link } from 'react-router';
import SignedInHeaderContainer from './signed_in_header_container';


const Header = ({ currentUser, login, logout }) => {
  return <SignedInHeaderContainer logout={logout}/>;
};

export default Header;
