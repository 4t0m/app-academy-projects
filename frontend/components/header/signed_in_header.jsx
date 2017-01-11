import React from 'react';

class SignedInHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <hgroup className="header-group">
        {console.log(this.props.currentUser)}
        <h2 className="header-name">Hi, {this.props.currentUser.fname}!</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
    	</hgroup>
    );
  }
}

export default SignedInHeader;
