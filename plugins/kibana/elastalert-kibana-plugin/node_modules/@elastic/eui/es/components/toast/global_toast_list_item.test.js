import React from 'react';
import { render } from 'enzyme';
import { EuiGlobalToastListItem } from './global_toast_list_item';
describe('EuiGlobalToastListItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiGlobalToastListItem, null, React.createElement("div", null, "Hi")));
    expect(component).toMatchSnapshot();
  });
});