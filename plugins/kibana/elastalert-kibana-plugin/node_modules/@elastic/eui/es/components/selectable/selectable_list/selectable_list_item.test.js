import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiSelectableListItem } from './selectable_list_item';
describe('EuiSelectableListItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSelectableListItem, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('checked is on', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        checked: "on"
      }));
      expect(component).toMatchSnapshot();
    });
    test('checked is off', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        checked: "off"
      }));
      expect(component).toMatchSnapshot();
    });
    test('showIcons can be turned off', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        showIcons: false
      }));
      expect(component).toMatchSnapshot();
    });
    test('isFocused', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        isFocused: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('disabled', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        disabled: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('prepend', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        prepend: React.createElement("span", null)
      }));
      expect(component).toMatchSnapshot();
    });
    test('append', function () {
      var component = render(React.createElement(EuiSelectableListItem, {
        append: React.createElement("span", null)
      }));
      expect(component).toMatchSnapshot();
    });
  });
});