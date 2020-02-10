import React from 'react';
import { render } from 'enzyme';
import { EuiValidatableControl } from './validatable_control';
describe('EuiValidatableControl', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiValidatableControl, null, React.createElement("input", null)));
    expect(component).toMatchSnapshot();
  });
});