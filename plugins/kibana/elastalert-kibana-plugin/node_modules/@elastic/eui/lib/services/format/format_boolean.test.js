"use strict";

var _format_boolean = require("./format_boolean");

describe('formatBoolean', function () {
  test('no config', function () {
    expect((0, _format_boolean.formatBoolean)(true)).toBe('Yes');
    expect((0, _format_boolean.formatBoolean)(false)).toBe('No');
  });
  test('with config', function () {
    var config = {
      yes: 'Aye',
      no: 'Nay'
    };
    expect((0, _format_boolean.formatBoolean)(true, config)).toBe('Aye');
    expect((0, _format_boolean.formatBoolean)(false, config)).toBe('Nay');
  });
});