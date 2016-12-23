import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.handle = setInterval(this.incrementTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  incrementTime() {
    let time = this.state.time.setSeconds(this.state.time.getSeconds() + 1);
    this.setState({time});
  }
}

export default Clock;
