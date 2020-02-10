import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiHorizontalRule } from './horizontal_rule';
describe('EuiHorizontalRule', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHorizontalRule, requiredProps));
    expect(component).toMatchSnapshot();
  });
});