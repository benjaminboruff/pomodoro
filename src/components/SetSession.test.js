import React from 'react';
import { shallow } from 'enzyme';
import SetSession from './SetSession';

// smoke
it('should render without error', () => {
  shallow(<SetSession />);
});
