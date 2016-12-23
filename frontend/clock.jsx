import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.handle = setInterval(this.incrementTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  incrementTime() {
    // console.log(this.state.time);
    let currentSeconds = this.state.time.getSeconds();
    let newSeconds = this.state.time.setSeconds(currentSeconds + 1);
    let time = new Date(newSeconds);
    this.setState({time});
  }

  render() {
    let hours = this.state.time.getHours(),
        minutes = this.state.time.getMinutes(),
        seconds = this.state.time.getSeconds();
        
    return (
      <div>
        <h1>{this.state.time.toDateString()}</h1>
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>

      </div>
    );
  }
}

export default Clock;
