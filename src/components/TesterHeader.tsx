import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import FormTest from './FormTest';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  border-bottom: 1px solid #dfdfdf;
  background: #fff;
  height: 50px;
  z-index: 100;
`;


@inject('testerCoreStore')
@observer
class TesterHeader extends React.Component<any, any> {
  render() {
    const { method, url } = this.props.testerCoreStore;
    return (
      <Wrapper className="tester-header">
        <FormTest method={method} url={url} {...this.props} />
      </Wrapper>
    );
  }
}

export default TesterHeader;
