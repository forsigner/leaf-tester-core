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
import yaml from 'js-yaml';

var ResponseEditor = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(ResponseEditor, _React$Component);

  function ResponseEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResponseEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResponseEditor.__proto__ || _Object$getPrototypeOf(ResponseEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleResize = function () {
      var _this2;

      return (_this2 = _this).__handleResize__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleEditorDidMount = function () {
      var _this3;

      return (_this3 = _this).__handleEditorDidMount__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.getLanguage = function () {
      var _this4;

      return (_this4 = _this).__getLanguage__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.getCode = function () {
      var _this5;

      return (_this5 = _this).__getCode__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResponseEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: '__handleResize__REACT_HOT_LOADER__',
    value: function __handleResize__REACT_HOT_LOADER__() {
      if (this.editor) {
        this.editor.layout();
      }
    }
  }, {
    key: '__handleEditorDidMount__REACT_HOT_LOADER__',
    value: function __handleEditorDidMount__REACT_HOT_LOADER__(editor) {
      this.editor = editor;
    }
  }, {
    key: '__getLanguage__REACT_HOT_LOADER__',
    value: function __getLanguage__REACT_HOT_LOADER__() {
      var _props = this.props,
          testerCoreStore = _props.testerCoreStore,
          language = _props.language;
      var mode = testerCoreStore.mode;

      return language ? language : mode;
    }
  }, {
    key: '__getCode__REACT_HOT_LOADER__',
    value: function __getCode__REACT_HOT_LOADER__() {
      var data = this.props.data;

      var language = this.getLanguage();

      if (language === 'json') {
        data = _JSON$stringify(data, null, 2);
      }

      if (language === 'yaml') {
        data = isEmpty(toJS(data)) ? '' : yaml.dump(toJS(data));
      }

      if (typeof data !== 'string') {
        data = data.toString();
      }

      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var testerCoreStore = this.props.testerCoreStore;
      var options = testerCoreStore.monacoEditorConfig.options;

      var code = this.getCode();
      var language = this.getLanguage();

      return React.createElement(MonacoEditor, {
        width: '100%',
        height: '100%',
        language: language,
        theme: 'vs-light',
        value: code,
        options: _extends({}, options, { readOnly: true }),
        editorDidMount: this.handleEditorDidMount
      });
    }
  }]);

  return ResponseEditor;
}(React.Component)) || _class) || _class);
var _default = ResponseEditor;


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

  __REACT_HOT_LOADER__.register(ResponseEditor, 'ResponseEditor', 'src/components/Response/ResponseEditor.js');

  __REACT_HOT_LOADER__.register(isEmpty, 'isEmpty', 'src/components/Response/ResponseEditor.js');

  __REACT_HOT_LOADER__.register(toJS, 'toJS', 'src/components/Response/ResponseEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Response/ResponseEditor.js');
}();

;