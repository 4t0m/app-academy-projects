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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" onChange={this.update('email')} value={this.state.email} />
          </label>
          <label>First Name
            <input type="text" onChange={this.update('fname')} value={this.state.fname} />
          </label>
          <label>Last Name
            <input type="text" onChange={this.update('lname')} value={this.state.lname} />
          </label>
          <label>Password
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>
          <input type='submit' value="Signup" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
