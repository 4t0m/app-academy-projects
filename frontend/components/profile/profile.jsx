import React from 'react';
import { hashHistory, Link } from 'react-router';
import HeaderContainer from '../header/header_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return <div>
      <HeaderContainer />
      This will be a profile
    </div>;
  }
}

export default Profile;
