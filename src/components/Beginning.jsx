import React from 'react';
import styled from 'styled-components';

const BeginningStyled = styled.div`
  text-align: center;
  > h1 {
    margin-top: 0;
  }
`;

class Beginning extends React.Component {
  render() {
    return (
      <BeginningStyled>
        <h1>Novel Quest</h1>
      </BeginningStyled>
    );
  }
}

export default Beginning;
