import React from 'react';
import { render } from 'enzyme';
import { EuiScreenReaderOnly } from './screen_reader';
describe('EuiScreenReaderOnly', function () {
  describe('adds an accessibility class to a child element', function () {
    test('when used with no props', function () {
      var $paragraph = render(React.createElement(EuiScreenReaderOnly, null, React.createElement("p", null, "This paragraph is not visibile to sighted users but will be read by screenreaders.")));
      expect($paragraph).toMatchSnapshot();
    });
    test('and combines other classNames (foo, bar) given as props on the child', function () {
      var $paragraph = render(React.createElement(EuiScreenReaderOnly, null, React.createElement("p", {
        className: "foo bar"
      }, "This paragraph is not visibile to sighted users but will be read by screenreaders.")));
      expect($paragraph).toMatchSnapshot();
    });
  });
});