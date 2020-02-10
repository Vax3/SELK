"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _portal = require("./portal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiPortal', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_portal.EuiPortal, null, "Content")));
    expect(component).toMatchSnapshot();
  });
});