"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickSelectPanelShape = exports.recentlyUsedRangeShape = exports.commonlyUsedRangeShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commonlyUsedRangeShape = _propTypes.default.shape({
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
});

exports.commonlyUsedRangeShape = commonlyUsedRangeShape;

var recentlyUsedRangeShape = _propTypes.default.shape({
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired
});

exports.recentlyUsedRangeShape = recentlyUsedRangeShape;

var quickSelectPanelShape = _propTypes.default.shape({
  title: _propTypes.default.string.isRequired,
  content: _propTypes.default.node.isRequired
});

exports.quickSelectPanelShape = quickSelectPanelShape;