import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiTitle } from './title';
describe('EuiTitle', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTitle, requiredProps, React.createElement("h1", null, "Title")));
    expect(component).toMatchSnapshot();
  });
});