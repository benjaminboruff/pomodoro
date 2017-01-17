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
        <Button value="inc-break" raised colored onClick={props.handlePeriodAdjust}>+</Button>
        <span>Break: { props.breakTime } min</span>
        <Button value="dec-break" raised colored onClick={props.handlePeriodAdjust}>-</Button>
      </div>
      <div className="periods">
        <Button value="inc-session" raised colored onClick={props.handlePeriodAdjust}>+</Button>
        <span>Session: { props.sessionTime } min</span>
        <Button value="dec-session" raised colored onClick={props.handlePeriodAdjust}>-</Button>
      </div>
    </div>
  );
}

export default SetPeriods;
