import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$getOwnPropertyDescriptor from 'babel-runtime/core-js/object/get-own-property-descriptor';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;

  _Object$defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { observable, action } from 'mobx';

var testerCoreStore = (_class = function () {
  function testerCoreStore() {
    _classCallCheck(this, testerCoreStore);

    _initDefineProp(this, 'mode', _descriptor, this);

    _initDefineProp(this, 'editorZone', _descriptor2, this);

    _initDefineProp(this, 'method', _descriptor3, this);

    _initDefineProp(this, 'url', _descriptor4, this);

    _initDefineProp(this, 'fetching', _descriptor5, this);

    _initDefineProp(this, 'request', _descriptor6, this);

    _initDefineProp(this, 'response', _descriptor7, this);

    _initDefineProp(this, 'tmp', _descriptor8, this);

    this.monacoEditorConfig = {
      options: {
        lineNumbers: 'off',
        minimap: {
          enabled: false
        },
        tabSize: 2,
        wordWrap: 'on',
        selectOnLineNumbers: true
      }
    };
  } // edit and ui mode, json or yaml


  // 临时存储数据对象


  _createClass(testerCoreStore, [{
    key: 'updateMode',
    value: function updateMode(mode) {
      this.mode = mode;
    }
  }, {
    key: 'updateMethod',
    value: function updateMethod(method) {
      this.method = method;
    }
  }, {
    key: 'updateUrl',
    value: function updateUrl(url) {
      this.url = url;
    }
  }, {
    key: 'updateFetchStatus',
    value: function updateFetchStatus(status) {
      this.fetching = status;
    }
  }, {
    key: 'changeEditorZone',
    value: function changeEditorZone(zone) {
      this.editorZone = zone;
    }

    // TODO 暂时只能编辑 Request

  }, {
    key: 'changeTmpValue',
    value: function changeTmpValue(editorZone, value) {
      var key = editorZone.toLowerCase();
      var request = this.tmp.request;

      this.tmp = _extends({}, this.tmp, { request: _extends({}, request, _defineProperty({}, key, value)) });
    }
  }, {
    key: 'changeEditorValue',
    value: function changeEditorValue(editorZone, value) {
      var key = editorZone.toLowerCase();
      if (value) {
        this.request = _extends({}, this.request, _defineProperty({}, key, value));
        return;
      }
      this.request = this.tmp.request;
    }
  }, {
    key: 'init',
    value: function init(_ref) {
      var method = _ref.method,
          url = _ref.url,
          request = _ref.request,
          response = _ref.response;

      if (method) this.method = method;
      if (url) this.url = url;
      if (request) {
        this.request = request;
        this.tmp.request = request;
      }
      if (response) {
        this.response = response;
        this.tmp.response = response;
      }
    }
  }]);

  return testerCoreStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'mode', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'yaml';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'editorZone', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'QUERY';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'method', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'GET';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'url', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'fetching', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'request', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      query: {},
      body: {},
      headers: {},
      auth: {}
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'response', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      body: {},
      headers: {},
      cookies: {},
      result: {},
      statusCode: null,
      statusMessage: '',
      time: {
        timingPhases: { total: 0 }
      }
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'tmp', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      request: {
        query: {},
        body: {},
        headers: {},
        auth: {}
      },
      response: {
        body: {},
        headers: {},
        cookies: {},
        result: {},
        statusCode: null,
        statusMessage: ''
      }
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'updateMode', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'updateMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateMethod', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'updateMethod'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateUrl', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'updateUrl'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateFetchStatus', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'updateFetchStatus'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeEditorZone', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'changeEditorZone'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeTmpValue', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'changeTmpValue'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeEditorValue', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'changeEditorValue'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'init', [action], _Object$getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype)), _class);

var _default = new testerCoreStore();

export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(testerCoreStore, 'testerCoreStore', 'src/stores/testerCoreStore.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/stores/testerCoreStore.js');
}();

;