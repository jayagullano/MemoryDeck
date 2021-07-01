import React from 'react';

/* This state is being */
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  //When the component laods, you set the interval using the tick() method.
  //The tick method sets the state of the date property to a new Date()
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //clears the interval
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        counter: this.state.counter+1
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default Timer;
