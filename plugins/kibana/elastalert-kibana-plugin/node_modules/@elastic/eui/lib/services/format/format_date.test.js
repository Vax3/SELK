"use strict";

var _format_date = require("./format_date");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('formatDate', function () {
  // 1st January 1999 02:03:04.005
  var value = new Date(1999, 0, 1, 2, 3, 4, 5);
  test('no config - date value', function () {
    expect((0, _format_date.formatDate)(value)).toBe('1 Jan 1999 02:03');
  });
  test('no config - number value', function () {
    expect((0, _format_date.formatDate)(value.getTime())).toBe('1 Jan 1999 02:03');
  });
  test('no config - string value', function () {
    expect((0, _format_date.formatDate)(value.toISOString())).toBe('1 Jan 1999 02:03');
  });
  test('no config - no value', function () {
    expect((0, _format_date.formatDate)()).toBe('');
  });
  test('with config - no value', function () {
    expect((0, _format_date.formatDate)(undefined, {
      nil: '-'
    })).toBe('-');
  });
  test('with config - "date" format', function () {
    expect((0, _format_date.formatDate)(value, 'date')).toBe('1 Jan 1999');
  });
  test('with config - "longDate" format', function () {
    expect((0, _format_date.formatDate)(value, 'longDate')).toBe('01 January 1999');
  });
  test('with config - "shortDate" format', function () {
    expect((0, _format_date.formatDate)(value, 'shortDate')).toBe('1 Jan 99');
  });
  test('with config - "dateTime" format', function () {
    expect((0, _format_date.formatDate)(value, 'dateTime')).toBe('1 Jan 1999 02:03');
  });
  test('with config - "longDateTime" format', function () {
    expect((0, _format_date.formatDate)(value, 'longDateTime')).toBe('01 January 1999 02:03:04');
  });
  test('with config - "shortDateTime" format', function () {
    expect((0, _format_date.formatDate)(value, 'shortDateTime')).toBe('1 Jan 99 02:03');
  });
  test('with config - "iso8601" format', function () {
    expect((0, _format_date.formatDate)(value, 'iso8601')).toBe("1999-01-01T02:03:04.005".concat(formatTimezoneOffset(value.getTimezoneOffset())));
  });
  test('with config - "calendarDate" format', function () {
    var options = {
      refTime: value // 1st January 1999 02:03:04.005 (Friday)

    };
    var oneMonthFromNow = (0, _moment.default)(options.refTime).add(1, 'month').toDate();
    expect((0, _format_date.formatDate)(oneMonthFromNow, {
      format: 'calendarDate',
      options: options
    })).toBe('1st Feb 1999');
    var twoDaysFromNow = (0, _moment.default)(options.refTime).add(2, 'day').toDate();
    expect((0, _format_date.formatDate)(twoDaysFromNow, {
      format: 'calendarDate',
      options: options
    })).toBe('Sunday');
    var oneDayFromNow = (0, _moment.default)(options.refTime).add(1, 'day').toDate();
    expect((0, _format_date.formatDate)(oneDayFromNow, {
      format: 'calendarDate',
      options: options
    })).toBe('Tomorrow');
    var anMinuteAgo = (0, _moment.default)(options.refTime).subtract(1, 'minute').toDate();
    expect((0, _format_date.formatDate)(anMinuteAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('Today');
    var oneDayAgo = (0, _moment.default)(options.refTime).subtract(1, 'day').toDate();
    expect((0, _format_date.formatDate)(oneDayAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('Yesterday');
    var twoDaysWeekAgo = (0, _moment.default)(options.refTime).subtract(2, 'day').toDate();
    expect((0, _format_date.formatDate)(twoDaysWeekAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('Last Wednesday');
    var oneMonthAgo = (0, _moment.default)(options.refTime).subtract(1, 'month').toDate();
    expect((0, _format_date.formatDate)(oneMonthAgo, {
      format: 'calendarDate',
      options: options
    })).toBe('1st Dec 1998');
  });
  test('with config - "calendarDateTime" format', function () {
    var options = {
      refTime: value // 1st January 1999 02:03:04.005

    };
    var oneMonthFromNow = (0, _moment.default)(options.refTime).add(1, 'month').toDate();
    expect((0, _format_date.formatDate)(oneMonthFromNow, {
      format: 'calendarDateTime',
      options: options
    })).toBe('1st Feb 1999 at 2:03AM');
    var twoDaysFromNow = (0, _moment.default)(options.refTime).add(2, 'day').toDate();
    expect((0, _format_date.formatDate)(twoDaysFromNow, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Sunday at 2:03AM');
    var oneDayFromNow = (0, _moment.default)(options.refTime).add(1, 'day').toDate();
    expect((0, _format_date.formatDate)(oneDayFromNow, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Tomorrow at 2:03AM');
    var anMinuteAgo = (0, _moment.default)(options.refTime).subtract(1, 'minute').toDate();
    expect((0, _format_date.formatDate)(anMinuteAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Today at 2:02AM');
    var oneDayAgo = (0, _moment.default)(options.refTime).subtract(1, 'day').toDate();
    expect((0, _format_date.formatDate)(oneDayAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Yesterday at 2:03AM');
    var twoDaysWeekAgo = (0, _moment.default)(options.refTime).subtract(2, 'day').toDate();
    expect((0, _format_date.formatDate)(twoDaysWeekAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('Last Wednesday at 2:03AM');
    var oneMonthAgo = (0, _moment.default)(options.refTime).subtract(1, 'month').toDate();
    expect((0, _format_date.formatDate)(oneMonthAgo, {
      format: 'calendarDateTime',
      options: options
    })).toBe('1st Dec 1998 at 2:03AM');
  });
  test('with config - custom format', function () {
    expect((0, _format_date.formatDate)(value, 'YYYY-MM-DD')).toBe('1999-01-01');
  });
});

function formatTimezoneOffset(offset) {
  if (offset === 0) {
    return '+00:00';
  }

  var sign = offset > 0 ? '-' : '+';
  offset = Math.abs(offset);
  var hrs = Math.floor(offset / 60);
  var mins = offset - hrs * 60;
  return "".concat(sign).concat(hrs < 9 ? '0' : '').concat(hrs, ":").concat(mins < 9 ? '0' : '').concat(mins);
}