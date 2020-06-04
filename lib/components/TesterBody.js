import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class;

import React from 'react';
import { inject, observer } from 'mobx-react';

import Editor from './Editor';

var EditorBody = (_dec = inject(), _dec(_class = observer(_class = function (_React$Component) {
  _inherits(EditorBody, _React$Component);

  function EditorBody() {
    _classCallCheck(this, EditorBody);

    return _possibleConstructorReturn(this, (EditorBody.__proto__ || _Object$getPrototypeOf(EditorBody)).apply(this, arguments));
  }

  _createClass(EditorBody, [{
    key: 'render',
    value: function render() {
      return React.createElement(Editor, this.props);
    }
  }]);

  return EditorBody;
}(React.Component)) || _class) || _class);
var _default = EditorBody;


export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EditorBody, 'EditorBody', 'src/components/TesterBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/TesterBody.js');
}();

;