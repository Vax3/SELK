"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _popover_title = require("./popover_title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiPopoverTitle', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_popover_title.EuiPopoverTitle, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
});