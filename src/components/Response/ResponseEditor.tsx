import React from 'react';
import { inject, observer } from 'mobx-react';
import MonacoEditor from 'react-monaco-editor';
import yaml from 'js-yaml';

@inject('testerCoreStore')
@observer
class ResponseEditor extends React.Component<any, any> {
  editor: any
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (this.editor) {
      this.editor.layout();
    }
  };

  handleEditorDidMount = editor => {
    this.editor = editor;
  };

  getLanguage = () => {
    const { testerCoreStore, language } = this.props;
    const { mode } = testerCoreStore;
    return language ? language : mode;
  };

  getCode = () => {
    let { data } = this.props;
    const language = this.getLanguage();

    if (language === 'json') {
      data = JSON.stringify(data, null, 2);
    }

    if (language === 'yaml') {
      data = isEmpty(toJS(data)) ? '' : yaml.dump(toJS(data));
    }

    if (typeof data !== 'string') {
      data = data.toString();
    }

    return data;
  };

  render() {
    const { testerCoreStore } = this.props;
    const { options } = testerCoreStore.monacoEditorConfig;
    const code = this.getCode();
    const language = this.getLanguage();

    return (
      <MonacoEditor
        width="100%"
        height="100%"
        language={language}
        theme="vs-light"
        value={code}
        options={{ ...options, readOnly: true }}
        editorDidMount={this.handleEditorDidMount}
      />
    );
  }
}

export default ResponseEditor;

function isEmpty(obj = {}) {
  return !Object.keys(obj).length;
}

function toJS(data = {}) {
  return JSON.parse(JSON.stringify(data));
}
