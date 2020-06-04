import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  padding: 10px;\n  border-top: 1px solid #f2f2f2;\n  background: #fff;\n'], ['\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  padding: 10px;\n  border-top: 1px solid #f2f2f2;\n  background: #fff;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #1abc9c;\n  padding: 0 0.3em;\n'], ['\n  color: #1abc9c;\n  padding: 0 0.3em;\n']);

import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

var Wrapper = styled.div(_templateObject);

var Color = styled.span(_templateObject2);

var StatusBar = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(StatusBar, _React$Component);

  function StatusBar() {
    _classCallCheck(this, StatusBar);

    return _possibleConstructorReturn(this, (StatusBar.__proto__ || _Object$getPrototypeOf(StatusBar)).apply(this, arguments));
  }

  _createClass(StatusBar, [{
    key: 'render',
    value: function render() {
      var response = this.props.testerCoreStore.response;
      var statusCode = response.statusCode,
          statusMessage = response.statusMessage,
          time = response.time;

      if (!statusCode || !time) return null;
      var _time$timingPhases$to = time.timingPhases.total,
          total = _time$timingPhases$to === undefined ? 0 : _time$timingPhases$to;

      return React.createElement(
        Wrapper,
        null,
        React.createElement(
          'span',
          null,
          'Status:',
          React.createElement(
            Color,
            null,
            statusCode
          ),
          statusMessage
        ),
        React.createElement(
          'span',
          null,
          '\xA0\xA0\xA0'
        ),
        React.createElement(
          'span',
          null,
          'Time:',
          React.createElement(
            Color,
            null,
            total.toFixed(3)
          ),
          'ms'
        )
      );
    }
  }]);

  return StatusBar;
}(React.Component)) || _class) || _class);
var _default = StatusBar;


export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/StatusBar.js');

  __REACT_HOT_LOADER__.register(Color, 'Color', 'src/components/StatusBar.js');

  __REACT_HOT_LOADER__.register(StatusBar, 'StatusBar', 'src/components/StatusBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/StatusBar.js');
}();

;