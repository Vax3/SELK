"use strict";

var _format_number = require("./format_number");

describe('formatNumber', function () {
  var value = 1234.5678;
  test('no config', function () {
    expect((0, _format_number.formatNumber)(value)).toBe(value.toString());
  });
  test('with config - "decimal1" format', function () {
    expect((0, _format_number.formatNumber)(value, 'decimal1')).toBe('1,234.5');
  });
  test('with config - "decimal1" format - rounded', function () {
    expect((0, _format_number.formatNumber)(value, {
      format: 'decimal1',
      round: true
    })).toBe('1,234.6');
  });
  test('with config - "decimal2" format', function () {
    expect((0, _format_number.formatNumber)(value, 'decimal2')).toBe('1,234.56');
  });
  test('with config - "decimal2" format - rounded', function () {
    expect((0, _format_number.formatNumber)(value, {
      format: 'decimal2',
      round: true
    })).toBe('1,234.57');
  });
  test('with config - "decimal3" format', function () {
    expect((0, _format_number.formatNumber)(value, 'decimal3')).toBe('1,234.567');
  });
  test('with config - "decimal3" format - rounded', function () {
    expect((0, _format_number.formatNumber)(value, {
      format: 'decimal3',
      round: true
    })).toBe('1,234.568');
  });
  test('with config - "ordinal" format', function () {
    expect((0, _format_number.formatNumber)(1, 'ordinal')).toBe('1st');
    expect((0, _format_number.formatNumber)(132, 'ordinal')).toBe('132nd');
    expect((0, _format_number.formatNumber)(89, 'ordinal')).toBe('89th');
    expect((0, _format_number.formatNumber)(23, 'ordinal')).toBe('23rd');
  });
  test('with config - "integer" format', function () {
    expect((0, _format_number.formatNumber)(value, 'integer')).toBe('1,234');
  });
});