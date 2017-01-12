import React from 'react';
import { hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => (this.setState( {[field]: e.target.value } ));
  }
  render () {
    return (
      <div className="signup-and-guest col-1-2">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <section className="name-input">
            <input type="text" onChange={this.update('fname')}
              placeholder="First Name" value={this.state.fname} />
            <input type="text" onChange={this.update('lname')}
              placeholder="Last Name" value={this.state.lname} />
          </section>

          <input type="text" onChange={this.update('email')}
            placeholder="Email" value={this.state.email} />
          <input type="password" onChange={this.update('password')}
            placeholder="Password" value={this.state.password} />

          <input className="large-button create-account" type='submit' value="Create Account" />
        </form>
        <button className="large-button guest-login" onClick={this.props.guestLogin} value="Guest Login">Guest Login</button>
      </div>
    );
  }
}

export default SignupForm;
