"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _global_toast_list_item = require("./global_toast_list_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiGlobalToastListItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_global_toast_list_item.EuiGlobalToastListItem, null, _react.default.createElement("div", null, "Hi")));
    expect(component).toMatchSnapshot();
  });
});