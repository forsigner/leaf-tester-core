import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  border-bottom: 1px solid #dfdfdf;\n  background: #fff;\n  height: 50px;\n  z-index: 100;\n'], ['\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  border-bottom: 1px solid #dfdfdf;\n  background: #fff;\n  height: 50px;\n  z-index: 100;\n']);

import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import FormTest from './FormTest';

var Wrapper = styled.div(_templateObject);

var TesterHeader = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(TesterHeader, _React$Component);

  function TesterHeader() {
    _classCallCheck(this, TesterHeader);

    return _possibleConstructorReturn(this, (TesterHeader.__proto__ || _Object$getPrototypeOf(TesterHeader)).apply(this, arguments));
  }

  _createClass(TesterHeader, [{
    key: 'render',
    value: function render() {
      var _props$testerCoreStor = this.props.testerCoreStore,
          method = _props$testerCoreStor.method,
          url = _props$testerCoreStor.url;

      return React.createElement(
        Wrapper,
        { className: 'tester-header' },
        React.createElement(FormTest, _extends({ method: method, url: url }, this.props))
      );
    }
  }]);

  return TesterHeader;
}(React.Component)) || _class) || _class);
var _default = TesterHeader;


export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/TesterHeader.js');

  __REACT_HOT_LOADER__.register(TesterHeader, 'TesterHeader', 'src/components/TesterHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/TesterHeader.js');
}();

;