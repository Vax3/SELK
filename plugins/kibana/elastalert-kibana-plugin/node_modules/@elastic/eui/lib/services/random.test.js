"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _random = require("./random");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Random', function () {
  it('should generate booleans', function () {
    var trueRandom = new _random.Random(function () {
      return 0.51;
    });
    var falseRandom = new _random.Random(function () {
      return 0.5;
    });
    expect(trueRandom.boolean()).toEqual(true);
    expect(falseRandom.boolean()).toEqual(false);
  });
  it('should generate numbers', function () {
    var random = new _random.Random(function () {
      return 0.42;
    });
    expect(random.number()).toEqual(7.550311166421726e307);
    expect(random.number({
      min: 5
    })).toEqual(7.550311166421726e307);
    expect(random.number({
      max: 10
    })).toEqual(4.2);
    expect(random.number({
      min: 5,
      max: 10
    })).toEqual(7.1);
    expect(random.number({
      min: -10,
      max: 10
    })).toBeCloseTo(-1.6);
  });
  it('should generate integers', function () {
    var random = new _random.Random(function () {
      return 0.42;
    });
    expect(random.integer({
      min: 0,
      max: 10
    })).toEqual(4);
    expect(random.integer({
      min: -10,
      max: 10
    })).toEqual(-2);
  });
  it('should select an array value', function () {
    var random = new _random.Random(function () {
      return 0.42;
    });
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(random.oneOf(values)).toEqual(5);
  });
  it('should select the specified array value', function () {
    var random = new _random.Random(function () {
      return 0.42;
    });
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(random.oneToOne(values, 4)).toEqual(5);
  });
  it('should select a set of random size', function () {
    var random = new _random.Random(function () {
      return 0.42;
    });
    var input = [12, 34, 56, 78, 90, 3434, 12313212, 3, 0];
    expect(random.setOf(input)).toEqual([78, 90, 56, 3434]);
  });
  it('should select a set of random size, with a size constraint', function () {
    var random = new _random.Random(function () {
      return 0.42;
    });
    var input = [12, 34, 56, 78, 90, 3434, 12313212, 3, 0];
    expect(random.setOf(input, {
      max: 5
    })).toEqual([78, 90]);
  });
  it('should generate a date', function () {
    var random = new _random.Random(function () {
      return 0.42;
    }); // The default max value is now, so we must specify a max in order to keep
    // the test deterministic.

    var actual = random.date({
      max: new Date(Date.parse('2018-12-25T12:23:34.123Z'))
    });
    expect(actual).toEqual(new Date(Date.parse('1990-07-29T00:24:17.932Z')));
  });
  it('should generate a moment', function () {
    var random = new _random.Random(function () {
      return 0.42;
    }); // The default max value is now, so we must specify a max in order to keep
    // the test deterministic.

    var actual = random.moment({
      max: (0, _moment.default)('2018-12-25T12:23:34.123Z')
    });
    expect(actual.toISOString()).toEqual('1990-07-29T00:24:17.932Z');
  });
});