import React from 'react';
import { Link } from 'react-router';
import LoginFormContainer from './login_form_container';
import WelcomeDetails from './welcome_details';
import SignupFormContainer from './signup_form_container';

const Welcome = ({ currentUser, login, logout, signup }) => {
  return (
    <div>
      <section className="welcome-header">
        <LoginFormContainer login={login}/>
      </section>
      <section className="main-container">
        <WelcomeDetails className="welcome-details"/>
        <SignupFormContainer className="signup-form" signup={signup} />
      </section>
    </div>
  );
};

export default Welcome;
