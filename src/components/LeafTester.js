import React from 'react';
import styled from 'styled-components';

import TesterHeader from './TesterHeader';
import TesterBody from './TesterBody';

const Wrapper = styled.section`
  position: relative;
  background: #fff;
  height: 100%;
  border-left: 1px solid #dfdfdf;
`;

class LeafTester extends React.Component {
  render() {
    return (
      <Wrapper className="leaf-tester-core">
        <TesterHeader {...this.props} />
        <TesterBody {...this.props} />
      </Wrapper>
    );
  }
}

export default LeafTester;
