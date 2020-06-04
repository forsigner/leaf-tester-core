import React from 'react';
import { inject, observer } from 'mobx-react';
import MonacoEditor from 'react-monaco-editor';
import parse from 'url-parse';
import yaml from 'js-yaml';

import ContentTypeSelector from './ContentTypeSelector';
import {
  YML_PARAM_TIPS,
  YML_HEADER_TIPS,
  JSON_PARAM_TIPS,
  JSON_HEADER_TIPS,
} from '../../constants';

@inject('testerCoreStore')
@observer
class RequestEditor extends React.Component {
  editor = null;

  handleEditorDidMount = editor => (this.editor = editor);

  getValueObj = newValue => {
    const { testerCoreStore } = this.props;
    const { mode } = testerCoreStore;

    try {
      if (mode === 'json') {
        return JSON.parse(newValue);
      }
      return yaml.safeLoad(newValue) || {};
    } catch (e) {
      console.log(e);
      return {};
    }
  };

  onChange = newValue => {
    const { testerCoreStore, onChange } = this.props;
    const { editorZone, url } = testerCoreStore;
    const obj = this.getValueObj(newValue);

    testerCoreStore.changeTmpValue(editorZone, obj);
    if (editorZone === 'QUERY') {
      const parsed = parse(url);
      parsed.set('query', obj);
      testerCoreStore.updateUrl(parsed.href);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  handleResize = () => {
    if (this.editor) {
      this.editor.layout();
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  getCode = () => {
    const { testerCoreStore } = this.props;
    const { editorZone, mode, request } = testerCoreStore;
    const key = editorZone.toLowerCase();
    const data = request[key] || {};
    const obj = toJS(data);
    if (mode === 'json') {
      if (!isEmpty(obj)) return JSON.stringify(obj, null, 2);
      if (editorZone === 'HEADERS') return JSON_HEADER_TIPS;
      return JSON_PARAM_TIPS;
    }
    if (mode === 'yaml') {
      if (!isEmpty(obj)) return yaml.dump(toJS(data));
      if (editorZone === 'HEADERS') return YML_HEADER_TIPS;
      return YML_PARAM_TIPS;
    }
    return '';
  };

  render() {
    const { testerCoreStore } = this.props;
    const { mode, editorZone, method } = testerCoreStore;
    const { options } = testerCoreStore.monacoEditorConfig;
    const code = this.getCode();
    const showContentTypeSelector =
      (method === 'POST' || method === 'PUT' || 'method' === 'DELETE') &&
      editorZone === 'BODY';

    return (
      <React.Fragment>
        {showContentTypeSelector && <ContentTypeSelector />}
        <MonacoEditor
          {...this.props}
          width="100%"
          height="100%"
          language={mode}
          theme="vs-light"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.handleEditorDidMount}
        />
      </React.Fragment>
    );
  }
}

export default RequestEditor;

function isEmpty(obj = {}) {
  return !Object.keys(obj).length;
}

function toJS(data = {}) {
  return JSON.parse(JSON.stringify(data));
}
