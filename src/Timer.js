import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Layout, Content } from 'react-mdl';
import './Timer.css';
import Output from './components/Output';
import alarmMpeg from  './sounds/fire.m4a';
import alarmOgg from './sounds/fire.ogg';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.sessionTime = parseInt(this.props.session, 10);
    this.breakTime = parseInt(this.props.break, 10);
    this.state = {
      durationSession: moment.duration(parseInt(this.props.session, 10), 'minutes'),
      durationBreak: moment.duration(parseInt(this.props.break, 10), 'minutes'),
      takeABreak: false,
      started: false
    };

    this.sessionTimerID = 0;
    this.breakTimerID = 0;

    this.handlePeriodAdjust = this.handlePeriodAdjust.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
  }

  componentDidMount() {
      // set up audio element for alarm bell
      this.alarm = ReactDOM.findDOMNode(this.refs.alarm_bell);
      this.alarm.volume = 0.3;
      if (this.alarm.canPlayType("audio/mpeg")) {
        this.alarm.setAttribute("src", alarmMpeg);
      } else {
        this.alarm.setAttribute("src", alarmOgg);
      }
  }

  componentWillUnmount() {
        clearInterval(this.sessionTimerID);
        clearInterval(this.breakTimerID);
    }

  playAlarm(delay) {
    this.alarm.loop = true;
    this.alarm.load();
    setTimeout(() => {this.alarm.play()}, 5000);
    setTimeout(() => {this.alarm.loop = false}, delay * 1000);
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
          this.playAlarm(2);
          //console.log("Break time!");
        }
      //console.log("Session: " + this.state.durationSession.get('minutes'));
      //console.log("Session: " + this.state.durationSession.get('seconds'));
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
          this.playAlarm(2);
        }
      //console.log("Break: " + this.state.durationBreak.get('minutes'));
      //console.log("Break: " + this.state.durationBreak.get('seconds'));
  }

  handlePeriodAdjust(e) {
    e.preventDefault();
    if(!this.state.started) {
      if(this.state.takeABreak || (!this.state.started && !this.state.takeABreak)) {
        if(e.target.value === "inc-break") {
          //console.log("add to break!!!!");
          this.breakTime += 1;
          this.setState(
            {
              durationBreak: moment.duration(this.breakTime, 'minutes')
            });
        } else if(e.target.value === "dec-break") {
          //console.log("dec break!!!!");
          this.breakTime = this.breakTime > 1 ? this.breakTime - 1 : 1;
          this.setState(
            {
              durationBreak: moment.duration(this.breakTime, 'minutes')
            });
        }
      }

      if(e.target.value === "inc-session") {
        //console.log("add to session!!!!");
        this.sessionTime += 1;
        this.setState(
          {
            durationSession: moment.duration(this.sessionTime, 'minutes')
          });
      } else if(e.target.value === "dec-session") {
        //console.log("dec session!!!!");
        this.sessionTime = this.sessionTime > 1 ? this.sessionTime - 1 : 1;
        this.setState(
          {
            durationSession: moment.duration(this.sessionTime, 'minutes')
          });
      }

    }
  }

  handleStartStop() {
    if(this.state.started) {
      this.setState({started: false});
      clearInterval(this.sessionTimerID);
      clearInterval(this.breakTimerID);
    } else {
      this.setState({started: true});
      if(this.state.takeABreak) {
        this.breakTimerID = setInterval(() => this.countDownBreak(), 1000);
      } else {
        this.sessionTimerID = setInterval(() => this.countDownSession(), 1000);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <audio ref="alarm_bell"></audio>
        <Layout className="App">
          <Content id="maincontent">
            <Output breakMin={this.state.durationBreak.get('minutes')}
                    breakSec={this.state.durationBreak.get('seconds')}
                    sessionMin={this.state.durationSession.get('minutes')}
                    sessionSec={this.state.durationSession.get('seconds')}
                    takeABreak={this.state.takeABreak}
                    handleStartStop={this.handleStartStop}
                    sessionTime={this.sessionTime}
                    handlePeriodAdjust={this.handlePeriodAdjust}
                    breakTime={this.breakTime} />
            <div id="copy">
              Designed and coded by
              <a href="http://stackoverflow.com/story/benjaminboruff">
                 <span>Benjamin H Boruff</span>
              </a> &copy;2017
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Timer;
