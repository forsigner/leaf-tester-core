import _Row from 'antd/lib/row';
import _Col2 from 'antd/lib/col';
import _Col from 'antd/lib/col';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  padding-top: 50px;\n  .ant-tabs-bar {\n    margin-bottom: 0;\n  }\n  .ant-tabs-content,\n  .ant-tabs-tabpane {\n    height: 100% !important;\n  }\n'], ['\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  padding-top: 50px;\n  .ant-tabs-bar {\n    margin-bottom: 0;\n  }\n  .ant-tabs-content,\n  .ant-tabs-tabpane {\n    height: 100% !important;\n  }\n']);

import React from 'react';

import styled from 'styled-components';

import Request from './Request';
import Response from './Response';
import StatusBar from './StatusBar';

var Wrapper = styled.div(_templateObject);

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || _Object$getPrototypeOf(Editor)).apply(this, arguments));
  }

  _createClass(Editor, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Wrapper,
        null,
        React.createElement(
          _Row,
          { style: { height: '100%' } },
          React.createElement(
            _Col,
            { span: 12, style: { height: '100%' } },
            React.createElement(Request, this.props)
          ),
          React.createElement(
            _Col2,
            {
              span: 12,
              style: { height: '100%', borderLeft: '1px solid #dfdfdf' }
            },
            React.createElement(Response, this.props),
            React.createElement(StatusBar, null)
          )
        )
      );
    }
  }]);

  return Editor;
}(React.Component);

var _default = Editor;


export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/Editor.js');

  __REACT_HOT_LOADER__.register(Editor, 'Editor', 'src/components/Editor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Editor.js');
}();

;