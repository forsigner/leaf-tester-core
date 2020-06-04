import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  border-top: 1px solid #f2f2f2;
  background: #fff;
`;

const Color = styled.span`
  color: #1abc9c;
  padding: 0 0.3em;
`;

@inject('testerCoreStore')
@observer
class StatusBar extends React.Component<any, any> {
  render() {
    const { response } = this.props.testerCoreStore;
    const { statusCode, statusMessage, time } = response;
    if (!statusCode || !time) return null;
    const { timingPhases: { total = 0 } } = time;
    return (
      <Wrapper>
        <span>
          Status:
          <Color>{statusCode}</Color>
          {statusMessage}
        </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>
          Time:
          <Color>{total.toFixed(3)}</Color>
          ms
        </span>
      </Wrapper>
    );
  }
}

export default StatusBar;
