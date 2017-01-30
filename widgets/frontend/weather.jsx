import React from "react";

class Weather extends React.Component {
  constructor() {
    super();

    this.state = { location: "" };
  }

  componentDidMount() {
    console.log(navigator.geolocation.getCurrentPosition());
    // this.setState({ location: navigator.geolocation});
  }
  render() {

    return (
    <div className="weatherWidget">{this.state.location}</div>
    );
  }
}


export default Weather;
