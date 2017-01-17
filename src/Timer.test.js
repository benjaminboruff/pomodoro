import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

// jest doesn't know anything about matchMedia, because jsdom isn't
// a real browser ... so this stub allows the test to pass
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timer />, div);
});
