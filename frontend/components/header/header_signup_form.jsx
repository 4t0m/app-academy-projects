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
    this.props.login(this.state);
  }

  update(field) {
    return e => (this.setState( {[field]: e.target.value } ));
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update('email')} value={this.state.email} />
          <input type="password" onChange={this.update('password')} value={this.state.password} />
          <input type='submit' value="Login">Login</input>
        </form>
      </div>
    );
  }
}

export default SignupForm;
