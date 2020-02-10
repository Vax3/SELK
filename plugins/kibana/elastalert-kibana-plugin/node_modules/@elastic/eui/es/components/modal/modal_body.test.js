import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiModalBody } from './modal_body';
test('renders EuiModalBody', function () {
  var component = React.createElement(EuiModalBody, requiredProps, "children");
  expect(render(component)).toMatchSnapshot();
});