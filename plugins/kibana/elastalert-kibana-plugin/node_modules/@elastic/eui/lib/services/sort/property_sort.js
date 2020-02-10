"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertySortType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sort_direction = require("./sort_direction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertySortType = _propTypes.default.shape({
  field: _propTypes.default.string.isRequired,
  direction: _sort_direction.SortDirectionType.isRequired
});

exports.PropertySortType = PropertySortType;