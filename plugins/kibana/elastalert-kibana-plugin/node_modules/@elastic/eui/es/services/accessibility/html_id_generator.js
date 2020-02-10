import uuid from 'uuid';
/**
 * This function returns a function to generate ids.
 * This can be used to generate unique, but predictable ids to pair labels
 * with their inputs. It takes an optional prefix as a parameter. If you don't
 * specify it, it generates a random id prefix. If you specify a custom prefix
 * it should begin with an letter to be HTML4 compliant.
 */

export function htmlIdGenerator(idPrefix) {
  var prefix = idPrefix || "i".concat(uuid.v1());
  return function (suffix) {
    return "".concat(prefix, "_").concat(suffix || uuid.v1());
  };
}