import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { FABButton } from 'react-mdl';
import "./SetBreak.css";

function SetBreak(props) {
  return (
    <div className="setbreak">
      <FABButton className="break-button" value="dec-break" raised onClick={props.handlePeriodAdjust}>{'\uFF0D'}</FABButton>
        <span>Break: { props.breakTime < 10 ? "0" + props.breakTime : props.breakTime } min</span>
      <FABButton className="break-button" value="inc-break" raised onClick={props.handlePeriodAdjust}>{'\uFF0B'}</FABButton>
    </div>
  );
}

export default SetBreak;
