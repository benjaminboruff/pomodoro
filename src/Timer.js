import React, { Component } from 'react';
import moment from 'moment';
import './Timer.css';
import SetPeriods from './components/SetPeriods';
import Output from './components/Output';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.sessionTime = parseInt(this.props.session, 10);
    this.breakTime = parseInt(this.props.break, 10);
    this.state = {
      durationSession: moment.duration(parseInt(this.props.session, 10), 'minutes'),
      durationBreak: moment.duration(parseInt(this.props.break, 10), 'minutes'),
      takeABreak: false,
      start: false
    };

    this.sessionTimerID = 0;
    this.breakTimerID = 0;

    this.handlePeriods = this.handlePeriods.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
  }

  componentDidMount() {
      //this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
      console.log("Moment says: " + this.state.durationSession.asMinutes() + " minutes");
  }

  componentWillUnmount() {
        clearInterval(this.sessionTimerID);
        clearInterval(this.breakTimerID);
    }

  handleStartStop() {
    if(this.state.start) {
      this.setState({start: false});
      clearInterval(this.sessionTimerID);
      clearInterval(this.breakTimerID);
    } else {
      this.setState({start: true});
      this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
    }
  }

  countDownSession() {
      if(this.state.durationSession.asSeconds() > 0) {
          this.setState(
            {
              durationSession: this.state.durationSession.subtract(1, 'second')
            });
        } else {
          clearInterval(this.sessionTimerID);
          this.breakTimerID = setInterval(() => this.countDownBreak(), 1000);
          this.setState(
            {
              durationSession: moment.duration(this.sessionTime, 'minutes'),
              takeABreak: true
            });
          console.log("Break time!");
        }
      console.log("Session: " + this.state.durationSession.get('minutes'));
      console.log("Session: " + this.state.durationSession.get('seconds'));
  }

  countDownBreak() {
      if(this.state.durationBreak.asSeconds() > 0) {
          this.setState(
            {
              durationBreak: this.state.durationBreak.subtract(1, 'second')
            });
        } else {
          clearInterval(this.breakTimerID);
          this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
          this.setState(
            {
              durationBreak: moment.duration(this.breakTime, 'minutes'),
              takeABreak: false
            });
        }
      console.log("Break: " + this.state.durationBreak.get('minutes'));
      console.log("Break: " + this.state.durationBreak.get('seconds'));
  }

  handlePeriods(e) {
    e.preventDefault();
    console.log("Periods!");
    if(e.target.value === "inc-break") {
      console.log("add to break!!!!");
      this.breakTime += 1;
      this.resetTimer();
    } else if(e.target.value === "dec-break") {
      console.log("dec break!!!!");
      this.breakTime -= 1;
      this.resetTimer();
    } else if(e.target.value === "inc-session") {
      console.log("add to session!!!!");
      this.sessionTime += 1;
      this.resetTimer();
    } else if(e.target.value === "dec-session") {
      console.log("dec session!!!!");
      this.sessionTime -= 1;
      this.resetTimer();
    }
  }

  resetTimer() {
    clearInterval(this.breakTimerID);
    clearInterval(this.sessionTimerID);
    this.setState(
      {
        durationSession: moment.duration(this.sessionTime, 'minutes'),
        durationBreak: moment.duration(this.breakTime, 'minutes'),
        takeABreak: false
      });
    this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pomodoro timer</h2>
        </div>
        <SetPeriods breakTime={this.breakTime}
                    sessionTime={this.sessionTime}
                    handlePeriods={this.handlePeriods}  />
        <Output breakMin={this.state.durationBreak.get('minutes')}
                breakSec={this.state.durationBreak.get('seconds')}
                sessionMin={this.state.durationSession.get('minutes')}
                sessionSec={this.state.durationSession.get('seconds')}
                takeABreak={this.state.takeABreak}
                handleStartStop={this.handleStartStop} />
      </div>
    );
  }
}

export default Timer;
