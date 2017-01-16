import React from 'react';


class AboutInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;
    if (this.props.user.id){
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

      return (
        <ul className="about-info-ul">
          {birthday}
          {currentCity}
          {hometown}
          {school}
          {workplace}
          {relationshipStatus}
        </ul>
      );
    } else {
      return (<div>No information</div>);
    }
  }
}

export default AboutInfo;
