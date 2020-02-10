"use strict";

var _format_auto = require("./format_auto");

describe('formatAuto', function () {
  test('boolean value', function () {
    expect((0, _format_auto.formatAuto)(true)).toBe('Yes');
    expect((0, _format_auto.formatAuto)(false)).toBe('No');
  });
  test('numeric value', function () {
    expect((0, _format_auto.formatAuto)(1234.567)).toBe('1234.567');
  });
  test('string value', function () {
    expect((0, _format_auto.formatAuto)('value')).toBe('value');
  });
  test('date value', function () {
    var value = new Date(1999, 0, 1, 2, 3, 4, 5);
    expect((0, _format_auto.formatAuto)(value)).toBe('1 Jan 1999 02:03');
  });
  test('array of dates', function () {
    var dates = [new Date(1999, 0, 1, 2, 3, 4, 5)];
    expect((0, _format_auto.formatAuto)(dates)).toBe('1 Jan 1999 02:03');
  });
  test('object value', function () {
    var obj = {
      key: 'value'
    };
    expect((0, _format_auto.formatAuto)(obj)).toBe('{"key":"value"}');
  });
});