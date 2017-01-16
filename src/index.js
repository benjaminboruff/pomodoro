import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Timer from './Timer';
import './index.css';

ReactDOM.render(
  <Timer session="10" break="5" />,
  document.getElementById('root')
);
