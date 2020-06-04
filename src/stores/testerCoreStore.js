import { observable, action } from 'mobx';

class testerCoreStore {
  @observable mode = 'yaml'; // edit and ui mode, json or yaml
  @observable editorZone = 'QUERY';
  @observable method = 'GET';
  @observable url = '';
  @observable fetching = false;

  @observable
  request = {
    query: {},
    body: {},
    headers: {},
    auth: {},
  };

  @observable
  response = {
    body: {},
    headers: {},
    cookies: {},
    result: {},
    statusCode: null,
    statusMessage: '',
    time: {
      timingPhases: { total: 0 },
    },
  };

  // 临时存储数据对象
  @observable
  tmp = {
    request: {
      query: {},
      body: {},
      headers: {},
      auth: {},
    },
    response: {
      body: {},
      headers: {},
      cookies: {},
      result: {},
      statusCode: null,
      statusMessage: '',
    },
  };

  monacoEditorConfig = {
    options: {
      lineNumbers: 'off',
      minimap: {
        enabled: false,
      },
      tabSize: 2,
      wordWrap: 'on',
      selectOnLineNumbers: true,
    },
  };

  @action
  updateMode(mode) {
    this.mode = mode;
  }

  @action
  updateMethod(method) {
    this.method = method;
  }

  @action
  updateUrl(url) {
    this.url = url;
  }

  @action
  updateFetchStatus(status) {
    this.fetching = status;
  }

  @action
  changeEditorZone(zone) {
    this.editorZone = zone;
  }

  // TODO 暂时只能编辑 Request
  @action
  changeTmpValue(editorZone, value) {
    const key = editorZone.toLowerCase();
    const { request } = this.tmp;
    this.tmp = { ...this.tmp, request: { ...request, [key]: value } };
  }

  @action
  changeEditorValue(editorZone, value) {
    const key = editorZone.toLowerCase();
    if (value) {
      this.request = { ...this.request, [key]: value };
      return;
    }
    this.request = this.tmp.request;
  }

  @action
  init({ method, url, request, response }) {
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
}

export default new testerCoreStore();
