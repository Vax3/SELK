"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlIdGenerator = htmlIdGenerator;

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function returns a function to generate ids.
 * This can be used to generate unique, but predictable ids to pair labels
 * with their inputs. It takes an optional prefix as a parameter. If you don't
 * specify it, it generates a random id prefix. If you specify a custom prefix
 * it should begin with an letter to be HTML4 compliant.
 */
function htmlIdGenerator(idPrefix) {
  var prefix = idPrefix || "i".concat(_uuid.default.v1());
  return function (suffix) {
    return "".concat(prefix, "_").concat(suffix || _uuid.default.v1());
  };
}