import React from 'react';

function Output(props) {
  if(props.takeABreak) {
    return (
      <div>
        <h2> Output: </h2>
        <h3> Break: { props.break } </h3>
        <h1>Take a break!</h1>
      </div>
    );
  } else {
    return (
      <div >
        <h2> Output: </h2>
        <h3> Break: { props.break } </h3>
        <h3> Session: { props.session } </h3>
      </div>
    );
  }
}

export default Output;
