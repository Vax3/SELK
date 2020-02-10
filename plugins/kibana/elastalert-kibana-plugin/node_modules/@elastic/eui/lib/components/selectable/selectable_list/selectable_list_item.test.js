"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _selectable_list_item = require("./selectable_list_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiSelectableListItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('checked is on', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        checked: "on"
      }));
      expect(component).toMatchSnapshot();
    });
    test('checked is off', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        checked: "off"
      }));
      expect(component).toMatchSnapshot();
    });
    test('showIcons can be turned off', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        showIcons: false
      }));
      expect(component).toMatchSnapshot();
    });
    test('isFocused', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        isFocused: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('disabled', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        disabled: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('prepend', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        prepend: _react.default.createElement("span", null)
      }));
      expect(component).toMatchSnapshot();
    });
    test('append', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_list_item.EuiSelectableListItem, {
        append: _react.default.createElement("span", null)
      }));
      expect(component).toMatchSnapshot();
    });
  });
});