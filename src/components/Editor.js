import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import Request from './Request';
import Response from './Response';
import StatusBar from './StatusBar';

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  padding-top: 50px;
  .ant-tabs-bar {
    margin-bottom: 0;
  }
  .ant-tabs-content,
  .ant-tabs-tabpane {
    height: 100% !important;
  }
`;

class Editor extends React.Component {
  render() {
    return (
      <Wrapper>
        <Row style={{ height: '100%' }}>
          <Col span={12} style={{ height: '100%' }}>
            <Request {...this.props} />
          </Col>
          <Col
            span={12}
            style={{ height: '100%', borderLeft: '1px solid #dfdfdf' }}
          >
            <Response {...this.props} />
            <StatusBar />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default Editor;
