import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import "./SetPeriods.css";

function SetPeriods(props) {
  return (
    <div>
      <div className="periods">
        <h2>Periods:</h2>
        <Button value="inc-break" raised colored ripple onClick={props.handlePeriods}>+</Button>
        <span>Break: { props.break }</span>
        <Button raised colored onClick={props.handlePeriods}>-</Button>
      </div>
      <div className="periods">
        <Button raised colored onClick={props.handlePeriods}>+</Button>
        <span>Session: { props.session }</span>
        <Button raised colored onClick={props.handlePeriods}>-</Button>
      </div>
    </div>
  );
}

export default SetPeriods;
