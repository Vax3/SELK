import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiSpacer } from './spacer';
describe('EuiSpacer', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSpacer, requiredProps));
    expect(component).toMatchSnapshot();
  });
});