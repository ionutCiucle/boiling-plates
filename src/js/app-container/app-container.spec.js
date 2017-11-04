import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AppContainer from './app-container';

enzyme.configure({ adapter: new Adapter() });

describe('<AppContainer/>', function() {
  it('should render correctly', function() {
    const wrapper = shallow(
      <AppContainer/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});