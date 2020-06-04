import _Form4 from 'antd/lib/form';
import _Form3 from 'antd/lib/form';
import _Form2 from 'antd/lib/form';
import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _Input from 'antd/lib/input';
import _Select2 from 'antd/lib/select';
import _Form from 'antd/lib/form';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';
import _Select from 'antd/lib/select';

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  &.ant-form {\n    position: relative;\n    padding-left: 115px;\n    padding-right: 70px;\n    -webkit-app-region: drag;\n  }\n'], ['\n  &.ant-form {\n    position: relative;\n    padding-left: 115px;\n    padding-right: 70px;\n    -webkit-app-region: drag;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &.ant-select {\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    width: 100px;\n  }\n  .ant-select-selection {\n    border: none;\n    transition: none;\n    box-shadow: none;\n    background: #f3f3f3;\n    border-radius: 16px;\n    -webkit-app-region: no-drag;\n    &:active,\n    &:focus,\n    &:hover {\n      border: none;\n      transition: none;\n      box-shadow: none;\n    }\n    .ant-select-selection__rendered {\n      line-height: 32px;\n    }\n  }\n'], ['\n  &.ant-select {\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    width: 100px;\n  }\n  .ant-select-selection {\n    border: none;\n    transition: none;\n    box-shadow: none;\n    background: #f3f3f3;\n    border-radius: 16px;\n    -webkit-app-region: no-drag;\n    &:active,\n    &:focus,\n    &:hover {\n      border: none;\n      transition: none;\n      box-shadow: none;\n    }\n    .ant-select-selection__rendered {\n      line-height: 32px;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-top: 8px;\n'], ['\n  padding-top: 8px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  &.ant-input {\n    -webkit-app-region: no-drag;\n    border-radius: 20px;\n    border: 0;\n    background: #f5f5f5;\n    &:active,\n    &:focus {\n      box-shadow: none;\n    }\n  }\n'], ['\n  &.ant-input {\n    -webkit-app-region: no-drag;\n    border-radius: 20px;\n    border: 0;\n    background: #f5f5f5;\n    &:active,\n    &:focus {\n      box-shadow: none;\n    }\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0px;\n  right: 10px;\n  display: inline-block;\n  font-size: 16px;\n  border: none;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 10px;\n  background: none;\n  margin: 0;\n  -webkit-app-region: no-drag;\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n    background-color: transparent;\n    outline: none;\n    color: #000;\n  }\n'], ['\n  position: absolute;\n  top: 0px;\n  right: 10px;\n  display: inline-block;\n  font-size: 16px;\n  border: none;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 10px;\n  background: none;\n  margin: 0;\n  -webkit-app-region: no-drag;\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n    background-color: transparent;\n    outline: none;\n    color: #000;\n  }\n']);

import React from 'react';
import { inject, observer } from 'mobx-react';

import styled from 'styled-components';
import parse from 'url-parse';

var METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTION'];

var Option = _Select.Option;

var Wrapper = styled(_Form)(_templateObject);

var MethodSelect = styled(_Select2)(_templateObject2);

var WrapInput = styled.div(_templateObject3);

var UrlInput = styled(_Input)(_templateObject4);

var ButtonSend = styled.button(_templateObject5);

var FormTest = (_dec = inject('testerCoreStore'), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(FormTest, _React$Component);

  function FormTest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormTest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormTest.__proto__ || _Object$getPrototypeOf(FormTest)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function () {
      var _this2;

      return (_this2 = _this).__onChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.changeInput = function () {
      var _this3;

      return (_this3 = _this).__changeInput__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleSubmit = function () {
      var _this4;

      return (_this4 = _this).__handleSubmit__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormTest, [{
    key: 'test',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(values) {
        var _props, testerCoreStore, onSend, request, query, body, headers, auth, url, method, noQueryUrl, args;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, testerCoreStore = _props.testerCoreStore, onSend = _props.onSend;
                request = testerCoreStore.tmp.request;
                query = request.query, body = request.body, headers = request.headers, auth = request.auth;
                url = values.url, method = values.method;
                noQueryUrl = url.split(/[?#]/)[0];
                args = [{ url: noQueryUrl, method: method, query: query, body: body, headers: headers, auth: auth }];

                onSend.apply(undefined, args);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function test(_x) {
        return _ref2.apply(this, arguments);
      }

      return test;
    }()
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(value) {
      var testerCoreStore = this.props.testerCoreStore;

      testerCoreStore.updateMethod(value);
      var methods = ['GET', 'DELETE', 'OPTION'];
      if (methods.indexOf(value) > -1) {
        testerCoreStore.changeEditorZone('QUERY');
      } else {
        testerCoreStore.changeEditorZone('BODY');
      }
    }
  }, {
    key: '__changeInput__REACT_HOT_LOADER__',
    value: function __changeInput__REACT_HOT_LOADER__(e) {
      var url = e.target.value;

      var _parse = parse(url, true),
          query = _parse.query;

      var testerCoreStore = this.props.testerCoreStore;

      if (query) {
        testerCoreStore.changeTmpValue('query', query);
        testerCoreStore.changeEditorValue('query', query);
      }
      testerCoreStore.updateUrl(url);
    }
  }, {
    key: '__handleSubmit__REACT_HOT_LOADER__',
    value: function __handleSubmit__REACT_HOT_LOADER__(e) {
      var _this5 = this;

      e.preventDefault();
      var _props2 = this.props,
          form = _props2.form,
          testerCoreStore = _props2.testerCoreStore;

      form.validateFieldsAndScroll(function (err, values) {
        if (err) return;
        var url = values.url,
            method = values.method;

        testerCoreStore.updateUrl(url);
        _this5.test({ url: url, method: method });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return React.createElement(
        Wrapper,
        { onSubmit: this.handleSubmit },
        getFieldDecorator('method', {
          rules: [{ required: true, message: '', whitespace: true }]
        })(React.createElement(
          MethodSelect,
          {
            getPopupContainer: function getPopupContainer(triggerNode) {
              return triggerNode.parentNode;
            },
            onChange: this.onChange
          },
          METHODS.map(function (item) {
            return React.createElement(
              Option,
              { key: item, value: item },
              item
            );
          })
        )),
        React.createElement(
          WrapInput,
          null,
          getFieldDecorator('url', {
            rules: [{ required: true, message: '', whitespace: true }],
            with: '50px'
          })(React.createElement(UrlInput, { onChange: this.changeInput, placeholder: 'URL' }))
        ),
        React.createElement(
          ButtonSend,
          { htmlType: 'submit' },
          'Send'
        )
      );
    }
  }]);

  return FormTest;
}(React.Component)) || _class) || _class);

var _default = _Form2.create({
  mapPropsToFields: function mapPropsToFields(props) {
    return {
      method: _Form3.createFormField({
        value: props.method
      }),
      url: _Form4.createFormField({
        value: props.url
      })
    };
  }
})(FormTest);

export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(METHODS, 'METHODS', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(Option, 'Option', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(MethodSelect, 'MethodSelect', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(WrapInput, 'WrapInput', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(UrlInput, 'UrlInput', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(ButtonSend, 'ButtonSend', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(FormTest, 'FormTest', 'src/components/FormTest.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormTest.js');
}();

;