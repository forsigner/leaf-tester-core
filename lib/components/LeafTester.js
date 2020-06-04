import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  background: #fff;\n  height: 100%;\n  border-left: 1px solid #dfdfdf;\n'], ['\n  position: relative;\n  background: #fff;\n  height: 100%;\n  border-left: 1px solid #dfdfdf;\n']);

import React from 'react';
import styled from 'styled-components';

import TesterHeader from './TesterHeader';
import TesterBody from './TesterBody';

var Wrapper = styled.section(_templateObject);

var LeafTester = function (_React$Component) {
  _inherits(LeafTester, _React$Component);

  function LeafTester() {
    _classCallCheck(this, LeafTester);

    return _possibleConstructorReturn(this, (LeafTester.__proto__ || _Object$getPrototypeOf(LeafTester)).apply(this, arguments));
  }

  _createClass(LeafTester, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Wrapper,
        { className: 'leaf-tester-core' },
        React.createElement(TesterHeader, this.props),
        React.createElement(TesterBody, this.props)
      );
    }
  }]);

  return LeafTester;
}(React.Component);

var _default = LeafTester;


export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/LeafTester.js');

  __REACT_HOT_LOADER__.register(LeafTester, 'LeafTester', 'src/components/LeafTester.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/LeafTester.js');
}();

;