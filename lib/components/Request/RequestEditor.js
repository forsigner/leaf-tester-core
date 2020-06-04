import _Object$keys from 'babel-runtime/core-js/object/keys';
import _extends from 'babel-runtime/helpers/extends';
import _JSON$stringify from 'babel-runtime/core-js/json/stringify';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class;

import React from 'react';
import { inject, observer } from 'mobx-react';
import MonacoEditor from 'react-monaco-editor';
import parse from 'url-parse';
import yaml from 'js-yaml';

import ContentTypeSelector from './ContentTypeSelector';
import { YML_PARAM_TIPS, YML_HEADER_TIPS, JSON_PARAM_TIPS, JSON_HEADER_TIPS } from '../../constants';

var RequestEditor = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(RequestEditor, _React$Component);

  function RequestEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RequestEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RequestEditor.__proto__ || _Object$getPrototypeOf(RequestEditor)).call.apply(_ref, [this].concat(args))), _this), _this.editor = null, _this.handleEditorDidMount = function () {
      var _this2;

      return (_this2 = _this).__handleEditorDidMount__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.getValueObj = function () {
      var _this3;

      return (_this3 = _this).__getValueObj__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.onChange = function () {
      var _this4;

      return (_this4 = _this).__onChange__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleResize = function () {
      var _this5;

      return (_this5 = _this).__handleResize__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.getCode = function () {
      var _this6;

      return (_this6 = _this).__getCode__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RequestEditor, [{
    key: '__handleEditorDidMount__REACT_HOT_LOADER__',
    value: function __handleEditorDidMount__REACT_HOT_LOADER__(editor) {
      return this.editor = editor;
    }
  }, {
    key: '__getValueObj__REACT_HOT_LOADER__',
    value: function __getValueObj__REACT_HOT_LOADER__(newValue) {
      var testerCoreStore = this.props.testerCoreStore;
      var mode = testerCoreStore.mode;


      try {
        if (mode === 'json') {
          return JSON.parse(newValue);
        }
        return yaml.safeLoad(newValue) || {};
      } catch (e) {
        console.log(e);
        return {};
      }
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(newValue) {
      var _props = this.props,
          testerCoreStore = _props.testerCoreStore,
          onChange = _props.onChange;
      var editorZone = testerCoreStore.editorZone,
          url = testerCoreStore.url;

      var obj = this.getValueObj(newValue);

      testerCoreStore.changeTmpValue(editorZone, obj);
      if (editorZone === 'QUERY') {
        var parsed = parse(url);
        parsed.set('query', obj);
        testerCoreStore.updateUrl(parsed.href);
      }

      if (onChange) {
        onChange(newValue);
      }
    }
  }, {
    key: '__handleResize__REACT_HOT_LOADER__',
    value: function __handleResize__REACT_HOT_LOADER__() {
      if (this.editor) {
        this.editor.layout();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: '__getCode__REACT_HOT_LOADER__',
    value: function __getCode__REACT_HOT_LOADER__() {
      var testerCoreStore = this.props.testerCoreStore;
      var editorZone = testerCoreStore.editorZone,
          mode = testerCoreStore.mode,
          request = testerCoreStore.request;

      var key = editorZone.toLowerCase();
      var data = request[key] || {};
      var obj = toJS(data);
      if (mode === 'json') {
        if (!isEmpty(obj)) return _JSON$stringify(obj, null, 2);
        if (editorZone === 'HEADERS') return JSON_HEADER_TIPS;
        return JSON_PARAM_TIPS;
      }
      if (mode === 'yaml') {
        if (!isEmpty(obj)) return yaml.dump(toJS(data));
        if (editorZone === 'HEADERS') return YML_HEADER_TIPS;
        return YML_PARAM_TIPS;
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var testerCoreStore = this.props.testerCoreStore;
      var mode = testerCoreStore.mode,
          editorZone = testerCoreStore.editorZone,
          method = testerCoreStore.method;
      var options = testerCoreStore.monacoEditorConfig.options;

      var code = this.getCode();
      var showContentTypeSelector = (method === 'POST' || method === 'PUT' || 'method' === 'DELETE') && editorZone === 'BODY';

      return React.createElement(
        React.Fragment,
        null,
        showContentTypeSelector && React.createElement(ContentTypeSelector, null),
        React.createElement(MonacoEditor, _extends({}, this.props, {
          width: '100%',
          height: '100%',
          language: mode,
          theme: 'vs-light',
          value: code,
          options: options,
          onChange: this.onChange,
          editorDidMount: this.handleEditorDidMount
        }))
      );
    }
  }]);

  return RequestEditor;
}(React.Component)) || _class) || _class);
var _default = RequestEditor;


export default _default;

function isEmpty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return !_Object$keys(obj).length;
}

function toJS() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return JSON.parse(_JSON$stringify(data));
}
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RequestEditor, 'RequestEditor', 'src/components/Request/RequestEditor.js');

  __REACT_HOT_LOADER__.register(isEmpty, 'isEmpty', 'src/components/Request/RequestEditor.js');

  __REACT_HOT_LOADER__.register(toJS, 'toJS', 'src/components/Request/RequestEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Request/RequestEditor.js');
}();

;