/* import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }
  render() {
    return <p className="App-clock">{this.state.time}</p>;
  }
}
export default Clock;
 */
import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(new Date().getTime() + this.props.timeZone * 1000)
      .toUTCString()
      .replace(/ GMT$/, ""),
  };

  timeRefresh() {
    this.setState({
      date: new Date(new Date().getTime() + this.props.timeZone * 1000)
        .toUTCString()
        .replace(/ GMT$/, ""),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.timeRefresh();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <span>{this.state.date}</span>
      </div>
    );
  }
}
export default Clock;
