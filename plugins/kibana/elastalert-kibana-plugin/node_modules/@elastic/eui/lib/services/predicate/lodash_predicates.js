"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNaN = exports.isNumber = exports.isBoolean = exports.isString = exports.isArray = exports.isFunction = void 0;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isBoolean2 = _interopRequireDefault(require("lodash/isBoolean"));

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));

var _isNaN2 = _interopRequireDefault(require("lodash/isNaN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// wrap the lodash functions to avoid having lodash's TS type definition from being
// exported, which can conflict with the lodash namespace if other versions are used
// tslint:disable-next-line:ban-types
var isFunction = function isFunction(value) {
  return (0, _isFunction2.default)(value);
};

exports.isFunction = isFunction;

var isArray = function isArray(value) {
  return (0, _isArray2.default)(value);
};

exports.isArray = isArray;

var isString = function isString(value) {
  return (0, _isString2.default)(value);
};

exports.isString = isString;

var isBoolean = function isBoolean(value) {
  return (0, _isBoolean2.default)(value);
};

exports.isBoolean = isBoolean;

var isNumber = function isNumber(value) {
  return (0, _isNumber2.default)(value);
};

exports.isNumber = isNumber;

var isNaN = function isNaN(value) {
  return (0, _isNaN2.default)(value);
};

exports.isNaN = isNaN;