import React from 'react';
import { Link } from 'react-router';
import LoginFormContainer from './login_form_container';
import WelcomeDetails from './welcome_details';
import SignupFormContainer from './signup_form_container';

const Welcome = ({ currentUser, login, logout, signup }) => {
  return (
    <div>
      <LoginFormContainer login={login}/>
      <WelcomeDetails />
      <SignupFormContainer signup={signup} />
    </div>
  );
};

export default Welcome;
