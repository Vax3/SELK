"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _header_logo = require("./header_logo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHeaderLogo', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_logo.EuiHeaderLogo, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders href', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_logo.EuiHeaderLogo, {
      href: "#"
    }));
    expect(component).toMatchSnapshot();
  });
  test('renders optional props', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_logo.EuiHeaderLogo, {
      iconType: "alert",
      iconTitle: "Moby Dick",
      style: {
        color: 'red'
      }
    }));
    expect(component).toMatchSnapshot();
  });
});