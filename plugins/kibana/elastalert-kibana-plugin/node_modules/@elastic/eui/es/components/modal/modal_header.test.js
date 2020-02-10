import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiModalHeader } from './modal_header';
test('renders EuiModalHeader', function () {
  var component = React.createElement(EuiModalHeader, requiredProps, "children");
  expect(render(component)).toMatchSnapshot();
});