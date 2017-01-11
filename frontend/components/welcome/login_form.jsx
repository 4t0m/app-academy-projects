import React from 'react';
import { hashHistory } from 'react-router';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.currentUser) {
      hashHistory.push('/');
    }
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
          <section className="login-input">
            <label>Email
              <input type="text" onChange={this.update('email')} value={this.state.email} />
            </label>
          </section>
          <section className="login-input">
            <label>Password
              <input type="password" onChange={this.update('password')} value={this.state.password} />
            </label>
          </section>
          <input type='submit' value="Login" className="login-button"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
