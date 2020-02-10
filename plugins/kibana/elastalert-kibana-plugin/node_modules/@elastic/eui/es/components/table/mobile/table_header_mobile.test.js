import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiTableHeaderMobile } from './table_header_mobile';
describe('EuiTableHeaderMobile', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableHeaderMobile, requiredProps));
    expect(component).toMatchSnapshot();
  });
});