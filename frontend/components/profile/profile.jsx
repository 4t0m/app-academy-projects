import React from 'react';
import { hashHistory, Link } from 'react-router';
import HeaderContainer from '../header/header_container';
import Pics from './pics';
import AboutInfo from './about_info';
import Friends from './friends';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.fetchUser();
  }


  render () {
    return <div className="profile-body">
      <HeaderContainer />
      <Pics />
      <AboutInfo user={this.props.user} currentUser={this.props.currentUser}
        updateUser={this.props.updateUser}/>
      <Friends />
      <p>
        This will be a profile
      </p>
    </div>;
  }
}

export default Profile;
