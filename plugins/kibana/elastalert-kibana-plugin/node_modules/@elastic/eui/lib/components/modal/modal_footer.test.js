"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _modal_footer = require("./modal_footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders EuiModalFooter', function () {
  var component = _react.default.createElement(_modal_footer.EuiModalFooter, _required_props.requiredProps, "children");

  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});