import React from 'react';
import { hashHistory, Link } from 'react-router';

class Header extends React.Component {
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
        <div className="header-container">
          <div className="header-bar">
            <div className="logo-and-search">
              <Link to={"/"} className="app-name">
                <h2 className="app-name">fbc</h2>
              </Link>
              <input type="text" className="search-bar"
                placeholder="Search"></input>
            </div>
            <div className="header-links">
              <Link to={`/profile/${this.props.currentUser.id}`} className="profile-link">
                {this.props.currentUser.fname}
              </Link>
              <Link to={"/"} className="feed-link">
                Home
              </Link>
              <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Header;
