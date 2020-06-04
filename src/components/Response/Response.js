import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Tabs, Tag } from 'antd';

import ResponseEditor from './ResponseEditor';

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

const Loader = styled.div`
  margin-top: 40px;
  text-align: center;
`;

@inject('testerCoreStore')
@observer
class Response extends React.Component {
  getLanguage = () => {
    const { testerCoreStore } = this.props;
    const { mode, response = {} } = testerCoreStore;
    const { statusCode, headers = {} } = response;
    const contentType = headers['content-type'] || '';
    let language = mode;

    if (!headers) {
      language = 'markdown';
    } else if (statusCode === 404) {
      language = 'markdown';
    } else if (
      contentType.includes('text/html') ||
      contentType.includes('text/plain')
    ) {
      language = 'html';
    } else if (
      contentType.includes('text/xml') ||
      contentType.includes('application/xml')
    ) {
      language = 'xml';
    } else if (contentType.includes('image/')) {
      // 图片要不要处理呢？
    }
    return language;
  };

  getBodyData = body => {
    const language = this.getLanguage();
    if (language === 'markdown') {
      return '404 Not Found';
    }
    return body;
  };

  getPanes = () => {
    const {
      body,
      headers = {},
      cookies,
      time = {},
    } = this.props.testerCoreStore.response;
    const { timingStart, timings, timingPhases } = time;
    const { length } = Object.keys(headers);
    const bodyData = this.getBodyData(body);
    const language = this.getLanguage();
    const panes = [
      {
        title: <div>Body</div>,
        key: 'RES_BODY',
        content: <ResponseEditor data={bodyData} language={language} />,
      },
      {
        title: (
          <div>
            Headers
            {!!length && <Count color="#f4f4f4">{length}</Count>}
          </div>
        ),
        key: 'RES_HEADERS',
        content: <ResponseEditor data={headers} />,
      },
      {
        title: 'Cookies',
        key: 'RES_COOKIES',
        content: <ResponseEditor data={cookies} />,
      },
      {
        title: 'Timing',
        key: 'TIMING',

        content: (
          <ResponseEditor
            data={{
              timingStart,
              timings,
              timingPhases,
            }}
          />
        ),
      },
    ];
    return panes;
  };

  render() {
    const panes = this.getPanes();
    const { testerCoreStore } = this.props;
    const { fetching } = testerCoreStore;
    return (
      <Tabs style={{ height: '100%' }}>
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key}>
            {fetching ? <Loader>loading....</Loader> : pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default Response;
