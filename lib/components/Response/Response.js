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

var _templateObject = _taggedTemplateLiteral(['\n  &.ant-tag {\n    line-height: normal;\n    height: unset;\n    padding: 0 4px;\n    font-size: 10px;\n    margin-left: 4px;\n    color: #bbb;\n    font-weight: light;\n  }\n'], ['\n  &.ant-tag {\n    line-height: normal;\n    height: unset;\n    padding: 0 4px;\n    font-size: 10px;\n    margin-left: 4px;\n    color: #bbb;\n    font-weight: light;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top: 40px;\n  text-align: center;\n'], ['\n  margin-top: 40px;\n  text-align: center;\n']);

import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


import ResponseEditor from './ResponseEditor';

var TabPane = _Tabs.TabPane;


var Count = styled(_Tag)(_templateObject);

var Loader = styled.div(_templateObject2);

var Response = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(Response, _React$Component);

  function Response() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Response);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Response.__proto__ || _Object$getPrototypeOf(Response)).call.apply(_ref, [this].concat(args))), _this), _this.getLanguage = function () {
      var _this2;

      return (_this2 = _this).__getLanguage__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.getBodyData = function () {
      var _this3;

      return (_this3 = _this).__getBodyData__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.getPanes = function () {
      var _this4;

      return (_this4 = _this).__getPanes__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Response, [{
    key: '__getLanguage__REACT_HOT_LOADER__',
    value: function __getLanguage__REACT_HOT_LOADER__() {
      var testerCoreStore = this.props.testerCoreStore;
      var mode = testerCoreStore.mode,
          _testerCoreStore$resp = testerCoreStore.response,
          response = _testerCoreStore$resp === undefined ? {} : _testerCoreStore$resp;
      var statusCode = response.statusCode,
          _response$headers = response.headers,
          headers = _response$headers === undefined ? {} : _response$headers;

      var contentType = headers['content-type'] || '';
      var language = mode;

      if (!headers) {
        language = 'markdown';
      } else if (statusCode === 404) {
        language = 'markdown';
      } else if (contentType.includes('text/html') || contentType.includes('text/plain')) {
        language = 'html';
      } else if (contentType.includes('text/xml') || contentType.includes('application/xml')) {
        language = 'xml';
      } else if (contentType.includes('image/')) {
        // 图片要不要处理呢？
      }
      return language;
    }
  }, {
    key: '__getBodyData__REACT_HOT_LOADER__',
    value: function __getBodyData__REACT_HOT_LOADER__(body) {
      var language = this.getLanguage();
      if (language === 'markdown') {
        return '404 Not Found';
      }
      return body;
    }
  }, {
    key: '__getPanes__REACT_HOT_LOADER__',
    value: function __getPanes__REACT_HOT_LOADER__() {
      var _props$testerCoreStor = this.props.testerCoreStore.response,
          body = _props$testerCoreStor.body,
          _props$testerCoreStor2 = _props$testerCoreStor.headers,
          headers = _props$testerCoreStor2 === undefined ? {} : _props$testerCoreStor2,
          cookies = _props$testerCoreStor.cookies,
          _props$testerCoreStor3 = _props$testerCoreStor.time,
          time = _props$testerCoreStor3 === undefined ? {} : _props$testerCoreStor3;
      var timingStart = time.timingStart,
          timings = time.timings,
          timingPhases = time.timingPhases;

      var _Object$keys = _Object$keys2(headers),
          length = _Object$keys.length;

      var bodyData = this.getBodyData(body);
      var language = this.getLanguage();
      var panes = [{
        title: React.createElement(
          'div',
          null,
          'Body'
        ),
        key: 'RES_BODY',
        content: React.createElement(ResponseEditor, { data: bodyData, language: language })
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
        key: 'RES_HEADERS',
        content: React.createElement(ResponseEditor, { data: headers })
      }, {
        title: 'Cookies',
        key: 'RES_COOKIES',
        content: React.createElement(ResponseEditor, { data: cookies })
      }, {
        title: 'Timing',
        key: 'TIMING',

        content: React.createElement(ResponseEditor, {
          data: {
            timingStart: timingStart,
            timings: timings,
            timingPhases: timingPhases
          }
        })
      }];
      return panes;
    }
  }, {
    key: 'render',
    value: function render() {
      var panes = this.getPanes();
      var testerCoreStore = this.props.testerCoreStore;
      var fetching = testerCoreStore.fetching;

      return React.createElement(
        _Tabs2,
        { style: { height: '100%' } },
        panes.map(function (pane) {
          return React.createElement(
            TabPane,
            { tab: pane.title, key: pane.key },
            fetching ? React.createElement(
              Loader,
              null,
              'loading....'
            ) : pane.content
          );
        })
      );
    }
  }]);

  return Response;
}(React.Component)) || _class) || _class);
var _default = Response;


export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TabPane, 'TabPane', 'src/components/Response/Response.js');

  __REACT_HOT_LOADER__.register(Count, 'Count', 'src/components/Response/Response.js');

  __REACT_HOT_LOADER__.register(Loader, 'Loader', 'src/components/Response/Response.js');

  __REACT_HOT_LOADER__.register(Response, 'Response', 'src/components/Response/Response.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Response/Response.js');
}();

;