import React from 'react';
import { Typography } from '@material-ui/core';

/* This state is being */
class Timer extends React.Component {
  constructor(props) {
    super(props);

    if(props.limit === 0){
      this.state = {counter: 0, unlimited: true};
    } else {
      this.state = {counter: props.limit, unlimited: false};
    }
    
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
    /* If the time limit is unlimited, increment 
    from 0, otherwise decrement */
    if(this.state.unlimited){
      this.setState({
        counter: this.state.counter+1
      });
    } else {
      this.setState({
        counter: this.state.counter-1
      });
    }

    //Clears the timer when the decrement hits 0
    if(!this.state.unlimited && this.state.counter <= 0){
      clearInterval(this.timerID);
    }

  }

  render() {
    return (
      <div>
        <Typography variant='h4'>{this.state.counter} seconds</Typography>
      </div>
    );
  }
}

export default Timer;
