"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cascadingMenuKeyCodes = void 0;

var _key_codes = require("../key_codes");

/**
 * These keys are used for navigating cascading menu UI components.
 *
 * UP: Select the previous item in the list.
 * DOWN: Select the next item in the list.
 * LEFT: Show the previous menu.
 * RIGHT: Show the next menu for the selected item.
 * ESC: Deselect the current selection and hide the list.
 * TAB: Normal tabbing navigation is still supported.
 */
var cascadingMenuKeyCodes = {
  DOWN: _key_codes.DOWN,
  ESCAPE: _key_codes.ESCAPE,
  LEFT: _key_codes.LEFT,
  RIGHT: _key_codes.RIGHT,
  UP: _key_codes.UP,
  TAB: _key_codes.TAB
};
exports.cascadingMenuKeyCodes = cascadingMenuKeyCodes;