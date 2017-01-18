import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import "./SetSession.css";

function SetSession(props) {
  return (
    <div className="setsession">
      <Button className="session-button" value="dec-session" raised onClick={props.handlePeriodAdjust}>{'\uFF0D'}</Button>
        <span>Session: { props.sessionTime } min</span>
      <Button className="session-button" value="inc-session" raised onClick={props.handlePeriodAdjust}>{'\uFF0B'}</Button>
    </div>
  );
}

export default SetSession;
