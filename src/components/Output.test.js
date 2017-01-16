import React from 'react';
import { shallow } from 'enzyme';
import Output from './Output';

// smoke
it('should render without error', () => {
  shallow(<Output />);
});
