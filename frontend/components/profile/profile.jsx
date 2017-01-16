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
    return <div>
      <HeaderContainer />
      <Pics />
      <AboutInfo user={this.props.user}/>
      <Friends />
      <p>
        This will be a profile
      </p>
    </div>;
  }
}

export default Profile;
