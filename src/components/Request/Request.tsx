import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Tabs, Tag } from 'antd';

import RequestEditor from './RequestEditor';

const { TabPane } = Tabs;

const Count = styled(Tag)`
  &.ant-tag {
    line-height: normal;
    height: unset;
    padding: 0 4px;
    font-size: 10px;
    margin-left: 4px;
    color: #bbb;
    font-weight: light;
  }
`;

@inject('testerCoreStore')
@observer
class Request extends React.Component<any, any> {
  getPanes = () => {
    const { testerCoreStore } = this.props;
    const { method } = testerCoreStore;
    const { headers = {} } = testerCoreStore.tmp.request;
    const { length } = Object.keys(headers);
    const panes = [
      {
        title: 'Query',
        key: 'QUERY',
        content: <RequestEditor />,
      },
      {
        title: 'Body',
        key: 'BODY',
        disabled: method === 'GET',
        content: <RequestEditor />,
      },
      {
        title: (
          <div>
            Headers
            {!!length && <Count color="#f4f4f4">{length}</Count>}
          </div>
        ),
        key: 'HEADERS',
        content: <RequestEditor />,
      },
      {
        title: 'Auth',
        key: 'AUTH',
        content: <RequestEditor />,
      },
    ];
    return panes;
  };

  selectTab = key => {
    const { testerCoreStore } = this.props;
    testerCoreStore.changeEditorZone(key);
    testerCoreStore.changeEditorValue(key);
  };

  render() {
    const { editorZone } = this.props.testerCoreStore;
    const { tabBarExtraContent = null } = this.props;
    const panes = this.getPanes();
    return (
      <Tabs
        activeKey={editorZone}
        onChange={this.selectTab}
        style={{ height: '100%' }}
        tabBarExtraContent={tabBarExtraContent}
      >
        {panes.map(pane => (
          <TabPane disabled={pane.disabled} tab={pane.title} key={pane.key}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default Request;
