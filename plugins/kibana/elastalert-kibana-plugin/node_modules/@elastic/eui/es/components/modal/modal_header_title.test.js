import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiModalHeaderTitle } from './modal_header_title';
test('renders EuiModalHeaderTitle', function () {
  var component = React.createElement(EuiModalHeaderTitle, requiredProps, "children");
  expect(render(component)).toMatchSnapshot();
});