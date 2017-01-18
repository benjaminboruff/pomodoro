import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { FABButton } from 'react-mdl';
import "./SetSession.css";

function SetSession(props) {
  return (
    <div className="setsession">
      <FABButton className="session-button" value="dec-session" raised onClick={props.handlePeriodAdjust}>{'\uFF0D'}</FABButton>
        <span>Session: { props.sessionTime } min</span>
      <FABButton className="session-button" value="inc-session" raised onClick={props.handlePeriodAdjust}>{'\uFF0B'}</FABButton>
    </div>
  );
}

export default SetSession;
