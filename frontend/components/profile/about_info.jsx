import React from 'react';


class AboutInfo extends React.Component {
  constructor(props){
    super(props);
  }


  submitProfileEdit() {

    var formData = new FormData();
    formData.append("user[birthday]", new Date($('input[name="birthday"]').val()));
    formData.append("user[relationship]", $('input[name="relationship"]').val());
    formData.append("user[school]", $('input[name="school"]').val());
    formData.append("user[workplace]", $('input[name="workplace"]').val());
    formData.append("user[current_town]", $('input[name="current_town"]').val());

    console.log(formData);
    this.props.updateUser(formData);

  }

  saveEditButton() {
    if (this.props.user) {
      if (this.props.currentUser.id === this.props.user.id) {
        return <div className="about-user-save" onClick={this.submitProfileEdit}>Save Changes</div>
      }
    }
  }



  thisUserInfo() {

    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;

    birthday = (<li>Birthday: <input type="date" name="birthday"
      defaultValue={this.props.user.birthday} /></li>);
    currentCity = (<li>Lives in <input type="text" name="currentCity"
      defaultValue={this.props.user.current_city} /></li>);
    hometown = (<li>From <input type="text" name="hometown"
      defaultValue={this.props.user.home_town} /></li>);
    school = (<li>Studied at <input type="text" name="school"
      defaultValue={this.props.user.school} /></li>);
    workplace = (<li>Works at <input type="text" name="workplace"
      defaultValue={this.props.user.workplace} /></li>);
    relationshipStatus = (<li>Relationship Status: <input type="text" name="relationship"
      defaultValue={this.props.user.relationship} /></li>);


    return(
      <ul className="about-user">
        {birthday}
        {relationshipStatus}
        {school}
        {workplace}
        {currentCity}
      </ul>
    );
  }

  otherUserInfo() {
    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;

    if(this.props.user.birthday){
      birthday = (<li>Birthday: {this.props.user.birthday.slice(5,10)}</li>);
    }
    if(this.props.user.current_city){
      currentCity = (<li>Lives in {this.props.user.current_city}</li>);
    }
    if(this.props.user.home_town){
      hometown = (<li>From {this.props.user.home_town}</li>);
    }
    if(this.props.user.school){
      school = (<li>Studied at {this.props.user.school}</li>);
    }
    if(this.props.user.workplace){
      workplace = (<li>Works at {this.props.user.workplace}</li>);
    }
    if(this.props.user.relationship){
      relationshipStatus = (<li>Relationship Status: {this.props.user.relationship}</li>);
    }

    return(
      <ul>
        {birthday}
        {currentCity}
        {hometown}
        {school}
        {workplace}
        {relationshipStatus}
      </ul>
    );
  }

  render () {


    if (this.props.user.id){

      const aboutInfo = this.props.currentUser.id === this.props.user.id ?
                                                   this.thisUserInfo() :
                                                   this.otherUserInfo();

      return (
        <div className="about-info">
          <div className="about-info-header">
            <h3>Intro</h3>
            {this.saveEditButton()}
          </div>
          {aboutInfo}
        </div>
      );
    } else {
      return (<div>No information</div>);
    }
  }
}

export default AboutInfo;
