import { formatAuto } from './format_auto';
describe('formatAuto', function () {
  test('boolean value', function () {
    expect(formatAuto(true)).toBe('Yes');
    expect(formatAuto(false)).toBe('No');
  });
  test('numeric value', function () {
    expect(formatAuto(1234.567)).toBe('1234.567');
  });
  test('string value', function () {
    expect(formatAuto('value')).toBe('value');
  });
  test('date value', function () {
    var value = new Date(1999, 0, 1, 2, 3, 4, 5);
    expect(formatAuto(value)).toBe('1 Jan 1999 02:03');
  });
  test('array of dates', function () {
    var dates = [new Date(1999, 0, 1, 2, 3, 4, 5)];
    expect(formatAuto(dates)).toBe('1 Jan 1999 02:03');
  });
  test('object value', function () {
    var obj = {
      key: 'value'
    };
    expect(formatAuto(obj)).toBe('{"key":"value"}');
  });
});