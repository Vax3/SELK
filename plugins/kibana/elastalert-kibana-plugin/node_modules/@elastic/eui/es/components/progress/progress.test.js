import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiProgress } from './progress';
describe('EuiProgress', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiProgress, requiredProps));
    expect(component).toMatchSnapshot();
  });
});