import { processStringToChildren } from './i18n_util';
describe('i18n_util', function () {
  describe('processStringToChildren', function () {
    it('returns a basic string as is', function () {
      var message = 'This is a test message.';
      expect(processStringToChildren(message, {})).toEqual(message);
    });
    it('replaces placeholders with values', function () {
      expect(processStringToChildren('{greeting}, {name}', {
        greeting: 'Hello',
        name: 'John'
      })).toEqual('Hello, John');
    });
    describe('escape characters', function () {
      it('backslash escapes opening and closing braces', function () {
        expect(processStringToChildren('{greeting}, \\{{name}\\}', {
          greeting: 'Hello',
          name: 'John'
        })).toEqual('Hello, {John}');
      });
      it('backslash does not escape any other characters', function () {
        var message = 'Thi\\s is\\ a test \\message\\.';
        expect(processStringToChildren(message, {})).toEqual(message);
      });
    });
    describe('i18nMappingFunction', function () {
      it('calls the mapping function with the source string', function () {
        expect(processStringToChildren('Hello, {name}', {
          greeting: 'Hello',
          name: 'John'
        }, function (value) {
          return value.toUpperCase();
        })).toEqual('HELLO, JOHN');
      });
    });
  });
});