import React from 'react';
import { Link } from 'react-router';
import LoginFormContainer from './login_form_container';
import WelcomeDetails from './welcome_details';
import SignupFormContainer from './signup_form_container';

const Welcome = ({ currentUser, login, logout, signup }) => {
  return (
    <div className="main-container">
      <div className="welcome-header-container">        
        <div className="welcome-header">
          <h1>Facebook Clone</h1>
          <LoginFormContainer login={login}/>
        </div>
      </div>
      <div className="welcome-body group">
        <section className="body-container group">
          <WelcomeDetails />
          <SignupFormContainer signup={signup} />
        </section>
      </div>
      <div className="welcome-footer">
      </div>
    </div>
  );
};

export default Welcome;
