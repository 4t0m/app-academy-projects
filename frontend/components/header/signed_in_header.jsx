import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class SignedInHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if(!this.props.currentUser) {
      hashHistory.push('/welcome');
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    if(this.props.currentUser){
      return (
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {this.props.currentUser.fname}!</h2>
          <button className="header-button" onClick={this.handleLogout}>Log Out</button>
        </hgroup>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SignedInHeader;
