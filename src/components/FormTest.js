import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Input, Select } from 'antd';
import styled from 'styled-components';
import parse from 'url-parse';

const METHODS = [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTION' ];

const Option = Select.Option;

const Wrapper = styled(Form)`
  &.ant-form {
    position: relative;
    padding-left: 115px;
    padding-right: 70px;
    -webkit-app-region: drag;
  }
`;

const MethodSelect = styled(Select)`
  &.ant-select {
    position: absolute;
    top: 9px;
    left: 10px;
    width: 100px;
  }
  .ant-select-selection {
    border: none;
    transition: none;
    box-shadow: none;
    background: #f3f3f3;
    border-radius: 16px;
    -webkit-app-region: no-drag;
    &:active,
    &:focus,
    &:hover {
      border: none;
      transition: none;
      box-shadow: none;
    }
    .ant-select-selection__rendered {
      line-height: 32px;
    }
  }
`;

const WrapInput = styled.div`
  padding-top: 8px;
`;

const UrlInput = styled(Input)`
  &.ant-input {
    -webkit-app-region: no-drag;
    border-radius: 20px;
    border: 0;
    background: #f5f5f5;
    &:active,
    &:focus {
      box-shadow: none;
    }
  }
`;

const ButtonSend = styled.button`
  position: absolute;
  top: 0px;
  right: 10px;
  display: inline-block;
  font-size: 16px;
  border: none;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
  background: none;
  margin: 0;
  -webkit-app-region: no-drag;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    color: #000;
  }
`;

@inject('testerCoreStore')
@observer
class FormTest extends React.Component {
  async test(values) {
    const { testerCoreStore, onSend } = this.props;
    const { request } = testerCoreStore.tmp;
    const { query, body, headers, auth } = request;
    const { url, method } = values;
    const noQueryUrl = url.split(/[?#]/)[0];
    const args = [{ url: noQueryUrl, method, query, body, headers, auth }];
    onSend(...args);
  }

  onChange = value => {
    const { testerCoreStore } = this.props;
    testerCoreStore.updateMethod(value);
    const methods = [ 'GET', 'DELETE', 'OPTION' ];
    if (methods.indexOf(value) > -1) {
      testerCoreStore.changeEditorZone('QUERY');
    } else {
      testerCoreStore.changeEditorZone('BODY');
    }
  };

  changeInput = e => {
    const url = e.target.value;
    const { query } = parse(url, true);
    const { testerCoreStore } = this.props;
    if (query) {
      testerCoreStore.changeTmpValue('query', query);
      testerCoreStore.changeEditorValue('query', query);
    }
    testerCoreStore.updateUrl(url);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, testerCoreStore } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (err) return;
      const { url, method } = values;
      testerCoreStore.updateUrl(url);
      this.test({ url, method });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        {getFieldDecorator('method', {
          rules: [{ required: true, message: '', whitespace: true }],
        })(
          <MethodSelect
            getPopupContainer={triggerNode => triggerNode.parentNode}
            onChange={this.onChange}
          >
            {METHODS.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </MethodSelect>
        )}
        <WrapInput>
          {getFieldDecorator('url', {
            rules: [{ required: true, message: '', whitespace: true }],
            with: '50px',
          })(<UrlInput onChange={this.changeInput} placeholder="URL" />)}
        </WrapInput>
        <ButtonSend htmlType="submit">Send</ButtonSend>
      </Wrapper>
    );
  }
}

export default Form.create({
  mapPropsToFields(props) {
    return {
      method: Form.createFormField({
        value: props.method,
      }),
      url: Form.createFormField({
        value: props.url,
      }),
    };
  },
})(FormTest);
