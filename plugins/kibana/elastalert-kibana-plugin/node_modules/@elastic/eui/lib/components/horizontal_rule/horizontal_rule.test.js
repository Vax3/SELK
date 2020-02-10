"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _horizontal_rule = require("./horizontal_rule");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHorizontalRule', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_horizontal_rule.EuiHorizontalRule, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
});