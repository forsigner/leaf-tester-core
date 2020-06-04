import React from 'react';
import { inject, observer } from 'mobx-react';
import { Radio } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px 20px;
`;

const enums = [
  { title: 'form-data', key: 'multipart/form-data' },
  { title: 'x-www-form-urlencoded', key: 'application/x-www-form-urlencoded' },
  { title: 'JSON', key: 'application/json' },
];

@inject('testerCoreStore')
@observer
class ContentTypeSelector extends React.Component {
  onChange = e => {
    const newVal = e.target.value;
    const { testerCoreStore } = this.props;
    const { request: { headers } } = testerCoreStore.tmp;
    const value = { ...headers, 'content-type': newVal };
    testerCoreStore.changeTmpValue('HEADERS', value);
    testerCoreStore.changeEditorValue('HEADERS', value);
  };

  render() {
    const { request = {} } = this.props.testerCoreStore;
    const { headers = {} } = request;

    // 黑科技啊卧槽...
    const value = headers['content-type'] || 'application/json';
    return (
      <Wrapper>
        <Radio.Group onChange={this.onChange} value={value}>
          {enums.map(t => (
            <Radio key={t.key} value={t.key}>
              {t.title}
            </Radio>
          ))}
        </Radio.Group>
      </Wrapper>
    );
  }
}

export default ContentTypeSelector;
