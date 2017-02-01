import React from 'react';

class TopSection extends React.Component {
  constructor(params) {
    super(params);

    this.addFriend = this.addFriend.bind(this);
    this.removeFriendship = this.removeFriendship.bind(this);
    this.acceptFriendship = this.acceptFriendship.bind(this);
    this.uploadNewPhoto = this.uploadNewPhoto.bind(this);
    this.updateCoverPicButton = this.updateCoverPicButton.bind(this);
    this.uploadCoverPhoto = this.uploadCoverPhoto.bind(this);
  }

  addFriend() {
    this.props.addFriend(this.props.params.id);
  }

  removeFriendship() {
    this.props.removeFriend(this.props.friendRelationship.id);
  }

  acceptFriendship() {
    this.props.acceptFriend(this.props.friendRelationship.id);
  }

  updateProfilePicButton() {
    if (this.props.currentUser) {
      if (this.props.params.id === this.props.currentUser.id) {
        return (
          <div className="profile-picture-editpic" onClick={ () => {
            $('#profile-pic-input').click()
          }}>
            <form className="profile-picture-form" >
              <input id="profile-pic-input" type="file" name="" value="" onChange={this.uploadNewPhoto}/>
            </form>
          </div>
        );
      } else {
        return (<div></div>)
      }
    } else {
      return (<div></div>)
    }
  }

  updateCoverPicButton() {
    return (
      <div className="profile-cover-editpic" onClick={ () => {
        $('#profile-cover-input').click()
      }}>

        <div>Upload Cover Photo</div>
        <form className="profile-cover-form" >
          <input id="profile-cover-input" type="file" name="" value="" onChange={this.uploadCoverPhoto}/>
        </form>
      </div>

    )
  }

  uploadCoverPhoto(e) {
    var file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[coverpic]", file);
    this.props.updateUser(formData);
  }

  uploadNewPhoto(e) {
    var file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[profilepic]", file);
    this.props.updateUser(formData).then(() => this.refreshPostsAfterUpload() );
  }

  friendButton() {
    if (this.props.friendRelationship) {
      if (this.props.friendRelationship.status === "active") {
        return(
          <div onClick={this.removeFriendship}>
            <div className="profile-cover-friend-status">Friends</div>
            <div className="profile-cover-friend-toggle">Unfriend</div>
          </div>
        );
      } else {
        if (this.props.friendRelationship.user1 === this.props.params.id) {
          return(<div onClick={this.acceptFriendship}>Accept Friendship</div>);
        } else {
          return(
            <div onClick={this.removeFriendship}>
              <div className="profile-cover-friend-status">Pending Request</div>
              <div className="profile-cover-friend-toggle">Cancel Request</div>
            </div>
          );
        }
      }
    } else {
      if (this.props.currentUser) {
        if (this.props.params.id === this.props.currentUser.id) {
          return this.updateCoverPicButton();
        } else {
          return(<div onClick={this.addFriend}>Add Friend</div>);
        }
      }
    }
  }

  render() {
    const fullName = this.props.user ? `${this.props.user.fname} ${this.props.user.lname}` : "";
    const firstName = this.props.user ? `${this.props.user.fname}` : "";
    const userCoverPic = this.props.user ? this.props.user.cover_pic : "";
    const coverStyle = {backgroundImage:"url("+userCoverPic+")"};
    const userProfilePic = this.props.user ? this.props.user.profile_pic : "";
    const profileStyle = {backgroundImage:"url("+userProfilePic+")"};

    return (
      <div className="profile-top-section">
        <div className="profile-cover-photo" style={coverStyle}>
          <div className="profile-cover-info">
            <div className="profile-cover-name">{fullName}</div>
          </div>
          <div className="profile-cover-buttons">
            <div className="profile-cover-friend">{this.friendButton()}</div>
          </div>
        </div>

        <div className="profile-topper-bottom">
          <div className="profile-picture">
            <div className="profile-picture-picture" style={profileStyle}>
              {this.updateProfilePicButton()}
            </div>
          </div>
          <ul className="profile-navigation">
            <li><a>Timeline</a></li>
          </ul>
        </div>
      </div>
    );
  }
}


export default TopSection;
