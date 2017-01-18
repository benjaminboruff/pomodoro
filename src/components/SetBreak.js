import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import "./SetBreak.css";

function SetBreak(props) {
  return (
    <div className="setbreak">
      <Button className="break-button" value="dec-break" raised onClick={props.handlePeriodAdjust}>{'\uFF0D'}</Button>
        <span>Break: { props.breakTime } min</span>
      <Button className="break-button" value="inc-break" raised onClick={props.handlePeriodAdjust}>{'\uFF0B'}</Button>
    </div>
  );
}

export default SetBreak;
