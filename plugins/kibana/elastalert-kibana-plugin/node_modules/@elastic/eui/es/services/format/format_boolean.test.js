import { formatBoolean } from './format_boolean';
describe('formatBoolean', function () {
  test('no config', function () {
    expect(formatBoolean(true)).toBe('Yes');
    expect(formatBoolean(false)).toBe('No');
  });
  test('with config', function () {
    var config = {
      yes: 'Aye',
      no: 'Nay'
    };
    expect(formatBoolean(true, config)).toBe('Aye');
    expect(formatBoolean(false, config)).toBe('Nay');
  });
});