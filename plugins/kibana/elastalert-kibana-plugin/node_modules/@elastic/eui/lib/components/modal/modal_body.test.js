"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _modal_body = require("./modal_body");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders EuiModalBody', function () {
  var component = _react.default.createElement(_modal_body.EuiModalBody, _required_props.requiredProps, "children");

  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});