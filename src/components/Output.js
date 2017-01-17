import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button, Card, CardText, CardActions, CardTitle } from 'react-mdl';
import './Output.css';
import SetSession from './SetSession';
import SetBreak from './SetBreak';

function Output(props) {
  if(props.takeABreak) {
    return (
      <Card className="output" shadow={3}>
        <CardTitle className="cardtitle">
          <SetSession sessionTime={props.sessionTime}
                      handlePeriodAdjust={props.handlePeriodAdjust}  />
        </CardTitle>
        <CardText>
          <h3>{ props.breakMin }:{ props.breakSec < 10 ? "0" + props.breakSec : props.breakSec } </h3>
          <h2 id="breaktext">Break</h2>
          <Button raised colored onClick={props.handleStartStop}>Start/Stop</Button>
        </CardText>
        <CardActions>
          <SetBreak breakTime={props.breakTime}
                    handlePeriodAdjust={props.handlePeriodAdjust}/>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card className="output" shadow={3}>
        <CardTitle className="cardtitle">
          <SetSession sessionTime={props.sessionTime}
                      handlePeriodAdjust={props.handlePeriodAdjust}  />
        </CardTitle>
        <CardText>
          <h2 id="sessiontext">Session</h2>
          <h3>{ props.sessionMin }:{ props.sessionSec < 10 ? "0" + props.sessionSec : props.sessionSec } </h3>
          <Button id="startstop" raised colored onClick={props.handleStartStop}>Start/Stop</Button>
        </CardText>
        <CardActions>
          <SetBreak breakTime={props.breakTime}
                    handlePeriodAdjust={props.handlePeriodAdjust}/>
        </CardActions>
      </Card>
    );
  }
}

export default Output;
