import React, { Component } from 'react';
import './Timer.css';
import SetPeriods from './components/SetPeriods';
import Output from './components/Output';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.sessionTime = parseInt(this.props.session, 10);
    this.breakTime = parseInt(this.props.break, 10);
    this.state = {
      sessionTime: parseInt(this.props.session, 10),
      breakTime: parseInt(this.props.break, 10),
      takeABreak: false
    };

    this.sessionTimerID = 0;
    this.breakTimerID = 0;

    this.handlePeriods = this.handlePeriods.bind(this);
  }

  componentDidMount() {
      this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
  }

  componentWillUnmount() {
        clearInterval(this.sessionTimerID);
        clearInterval(this.breakTimerID);
    }

  countDownSession() {
      if(this.state.sessionTime > 0) {
          this.setState({sessionTime: this.state.sessionTime - 1});
        } else {
          clearInterval(this.sessionTimerID);
          this.breakTimerID = setInterval(() => this.countDownBreak(), 1000);
          this.setState({ sessionTime: this.sessionTime, takeABreak: true });
          console.log("Break time!");
        }
      console.log("Session: " + this.state.sessionTime);
  }

  countDownBreak() {
      if(this.state.breakTime > 0) {
          this.setState({ breakTime: this.state.breakTime - 1 });
        } else {
          clearInterval(this.breakTimerID);
          this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
          this.setState({ breakTime: this.breakTime, takeABreak: false });
        }
      console.log("Break: " + this.state.breakTime);
  }

  handlePeriods(e) {
    e.preventDefault();
    console.log("Periods!");
    if(e.target.value === "inc-break") {
      console.log("add to break!!!!");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pomodoro timer</h2>
        </div>
        <SetPeriods break={this.props.break} session={this.props.session} handlePeriods={this.handlePeriods}/>
        <Output break={this.state.breakTime} session={this.state.sessionTime}
                takeABreak={this.state.takeABreak} />
      </div>
    );
  }
}

export default Timer;
