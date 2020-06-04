import _Radio2 from 'antd/lib/radio';
import _Radio from 'antd/lib/radio';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 5px 20px;\n'], ['\n  padding: 5px 20px;\n']);

import React from 'react';
import { inject, observer } from 'mobx-react';

import styled from 'styled-components';

var Wrapper = styled.div(_templateObject);

var enums = [{ title: 'form-data', key: 'multipart/form-data' }, { title: 'x-www-form-urlencoded', key: 'application/x-www-form-urlencoded' }, { title: 'JSON', key: 'application/json' }];

var ContentTypeSelector = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(ContentTypeSelector, _React$Component);

  function ContentTypeSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContentTypeSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContentTypeSelector.__proto__ || _Object$getPrototypeOf(ContentTypeSelector)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function () {
      var _this2;

      return (_this2 = _this).__onChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContentTypeSelector, [{
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(e) {
      var newVal = e.target.value;
      var testerCoreStore = this.props.testerCoreStore;
      var headers = testerCoreStore.tmp.request.headers;

      var value = _extends({}, headers, { 'content-type': newVal });
      testerCoreStore.changeTmpValue('HEADERS', value);
      testerCoreStore.changeEditorValue('HEADERS', value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$testerCoreStor = this.props.testerCoreStore.request,
          request = _props$testerCoreStor === undefined ? {} : _props$testerCoreStor;
      var _request$headers = request.headers,
          headers = _request$headers === undefined ? {} : _request$headers;

      // 黑科技啊卧槽...

      var value = headers['content-type'] || 'application/json';
      return React.createElement(
        Wrapper,
        null,
        React.createElement(
          _Radio2.Group,
          { onChange: this.onChange, value: value },
          enums.map(function (t) {
            return React.createElement(
              _Radio,
              { key: t.key, value: t.key },
              t.title
            );
          })
        )
      );
    }
  }]);

  return ContentTypeSelector;
}(React.Component)) || _class) || _class);
var _default = ContentTypeSelector;


export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/Request/ContentTypeSelector.js');

  __REACT_HOT_LOADER__.register(enums, 'enums', 'src/components/Request/ContentTypeSelector.js');

  __REACT_HOT_LOADER__.register(ContentTypeSelector, 'ContentTypeSelector', 'src/components/Request/ContentTypeSelector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Request/ContentTypeSelector.js');
}();

;