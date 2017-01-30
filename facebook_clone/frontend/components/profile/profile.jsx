import React from 'react';
import { hashHistory, Link } from 'react-router';
import HeaderContainer from '../header/header_container';
import TopSection from './top_section';
import AboutInfo from './about_info';
import Friends from './friends';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
  }


  componentWillUpdate(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id);
      // this.props.findFriend(nextProps.params.id);
    }
  }

  render () {
    return <div>
      <HeaderContainer />
      <div className="profile-container">
        <div className="profile-body">
          <TopSection user={this.props.user}/>
          <AboutInfo user={this.props.user} currentUser={this.props.currentUser}
            updateUser={this.props.updateUser}/>
          <Friends />
          <p>
            This will be a profile
          </p>
        </div>
      </div>
    </div>;
  }
}

export default Profile;
