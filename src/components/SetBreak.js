import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import "./SetBreak.css";

function SetBreak(props) {
  return (
    <div className="periods">
      <Button value="dec-break" raised colored onClick={props.handlePeriodAdjust}>-</Button>
        <span>Break: { props.breakTime } min</span>
      <Button value="inc-break" raised colored onClick={props.handlePeriodAdjust}>+</Button>
    </div>
  );
}

export default SetBreak;
