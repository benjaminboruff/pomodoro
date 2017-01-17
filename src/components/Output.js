import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';

function Output(props) {
  if(props.takeABreak) {
    return (
      <div>
        <h2> Output: </h2>
        <h3> Break { props.breakMin }:{ props.breakSec < 10 ? "0" + props.breakSec : props.breakSec } </h3>
        <h1>Take a break!</h1>
        <Button raised colored onClick={props.handleStartStop}>Start/Stop</Button>
      </div>
    );
  } else {
    return (
      <div >
        <h2> Output: </h2>
        <h3> Break time  { props.breakMin }:{ props.breakSec < 10 ? "0" + props.breakSec : props.breakSec } </h3>
        <h3> Session time { props.sessionMin }:{ props.sessionSec < 10 ? "0" + props.sessionSec : props.sessionSec } </h3>
        <Button raised colored onClick={props.handleStartStop}>Start/Stop</Button>
      </div>
    );
  }
}

export default Output;
