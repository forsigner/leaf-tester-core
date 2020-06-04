import _Tabs2 from 'antd/lib/tabs';
import _Object$keys2 from 'babel-runtime/core-js/object/keys';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _Tag from 'antd/lib/tag';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';
import _Tabs from 'antd/lib/tabs';

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  &.ant-tag {\n    line-height: normal;\n    height: unset;\n    padding: 0 4px;\n    font-size: 10px;\n    margin-left: 4px;\n    color: #bbb;\n    font-weight: light;\n  }\n'], ['\n  &.ant-tag {\n    line-height: normal;\n    height: unset;\n    padding: 0 4px;\n    font-size: 10px;\n    margin-left: 4px;\n    color: #bbb;\n    font-weight: light;\n  }\n']);

import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


import RequestEditor from './RequestEditor';

var TabPane = _Tabs.TabPane;


var Count = styled(_Tag)(_templateObject);

var Request = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(Request, _React$Component);

  function Request() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Request);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Request.__proto__ || _Object$getPrototypeOf(Request)).call.apply(_ref, [this].concat(args))), _this), _this.getPanes = function () {
      var _this2;

      return (_this2 = _this).__getPanes__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.selectTab = function () {
      var _this3;

      return (_this3 = _this).__selectTab__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Request, [{
    key: '__getPanes__REACT_HOT_LOADER__',
    value: function __getPanes__REACT_HOT_LOADER__() {
      var testerCoreStore = this.props.testerCoreStore;
      var method = testerCoreStore.method;
      var _testerCoreStore$tmp$ = testerCoreStore.tmp.request.headers,
          headers = _testerCoreStore$tmp$ === undefined ? {} : _testerCoreStore$tmp$;

      var _Object$keys = _Object$keys2(headers),
          length = _Object$keys.length;

      var panes = [{
        title: 'Query',
        key: 'QUERY',
        content: React.createElement(RequestEditor, null)
      }, {
        title: 'Body',
        key: 'BODY',
        disabled: method === 'GET',
        content: React.createElement(RequestEditor, null)
      }, {
        title: React.createElement(
          'div',
          null,
          'Headers',
          !!length && React.createElement(
            Count,
            { color: '#f4f4f4' },
            length
          )
        ),
        key: 'HEADERS',
        content: React.createElement(RequestEditor, null)
      }, {
        title: 'Auth',
        key: 'AUTH',
        content: React.createElement(RequestEditor, null)
      }];
      return panes;
    }
  }, {
    key: '__selectTab__REACT_HOT_LOADER__',
    value: function __selectTab__REACT_HOT_LOADER__(key) {
      var testerCoreStore = this.props.testerCoreStore;

      testerCoreStore.changeEditorZone(key);
      testerCoreStore.changeEditorValue(key);
    }
  }, {
    key: 'render',
    value: function render() {
      var editorZone = this.props.testerCoreStore.editorZone;
      var _props$tabBarExtraCon = this.props.tabBarExtraContent,
          tabBarExtraContent = _props$tabBarExtraCon === undefined ? null : _props$tabBarExtraCon;

      var panes = this.getPanes();
      return React.createElement(
        _Tabs2,
        {
          activeKey: editorZone,
          onChange: this.selectTab,
          style: { height: '100%' },
          tabBarExtraContent: tabBarExtraContent
        },
        panes.map(function (pane) {
          return React.createElement(
            TabPane,
            { disabled: pane.disabled, tab: pane.title, key: pane.key },
            pane.content
          );
        })
      );
    }
  }]);

  return Request;
}(React.Component)) || _class) || _class);
var _default = Request;


export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TabPane, 'TabPane', 'src/components/Request/Request.js');

  __REACT_HOT_LOADER__.register(Count, 'Count', 'src/components/Request/Request.js');

  __REACT_HOT_LOADER__.register(Request, 'Request', 'src/components/Request/Request.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Request/Request.js');
}();

;