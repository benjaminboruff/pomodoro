import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import "./SetSession.css";

function SetSession(props) {
  return (
    <div className="setsession">
      <Button value="dec-session" raised colored onClick={props.handlePeriodAdjust}>-</Button>
        <span>Session: { props.sessionTime } min</span>
      <Button value="inc-session" raised colored onClick={props.handlePeriodAdjust}>+</Button>
    </div>
  );
}

export default SetSession;
