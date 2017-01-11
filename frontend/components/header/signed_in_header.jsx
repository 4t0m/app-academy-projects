import React from 'react';
import { hashHistory } from 'react-router';

class SignedInHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    return e => {
      e.preventDefault();
      this.props.logout();
    };
  }

  render () {
    return (
      <hgroup className="header-group">
        {console.log(this.props.currentUser)}
        <h2 className="header-name">Hi, {this.props.currentUser.fname}!</h2>
        <button className="header-button" onClick={this.handleLogout()}>Log Out</button>
    	</hgroup>
    );
  }
}

export default SignedInHeader;
