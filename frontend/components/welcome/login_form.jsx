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
        <form className="login-form" onSubmit={this.handleSubmit}>
          <section className="login-field">
            <label htmlFor="email">Email</label>
            <input type="text" onChange={this.update('email')}
              name="email" value={this.state.email} />
          </section>
          <section className="login-field">
            <label htmlFor="password">Password</label>
              <input type="password" onChange={this.update('password')}
                name="password" value={this.state.password} />
          </section>
            <input type="submit" name="submit" value="Log In" className="login-button"/>
        </form>
    );
  }
}

export default LoginForm;
