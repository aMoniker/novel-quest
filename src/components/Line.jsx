import React from 'react';
import styled from 'styled-components';

const LineStyled = styled.span`
`;

class Line extends React.Component {
  render() {
    const { children } = this.props;
    return (<LineStyled>{children}</LineStyled>);
  }
}

export default Line;
