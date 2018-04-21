import React from 'react';
import styled from 'styled-components';

const LineStyled = styled.span`
`;

class Line extends React.Component {
  render() {
    const { text } = this.props;
    return (<LineStyled>{text} </LineStyled>);
  }
}

export default Line;
