import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiModalFooter } from './modal_footer';
test('renders EuiModalFooter', function () {
  var component = React.createElement(EuiModalFooter, requiredProps, "children");
  expect(render(component)).toMatchSnapshot();
});