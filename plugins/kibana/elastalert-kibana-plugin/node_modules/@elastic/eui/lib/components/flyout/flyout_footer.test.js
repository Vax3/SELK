"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _flyout_footer = require("./flyout_footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFlyoutFooter', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flyout_footer.EuiFlyoutFooter, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
});