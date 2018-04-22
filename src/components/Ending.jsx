import React from 'react';
import styled from 'styled-components';

const EndingStyled = styled.div`
  font-family: 'Great Vibes', cursive;
  text-align: center;
`;

const ResetStyled = styled.h3`
  cursor: pointer;
`;

class Ending extends React.Component {
  render() {
    const { reset } = this.props
    return (
      <EndingStyled>
        <h2>The End</h2>
        <ResetStyled onClick={reset}>Play Again?</ResetStyled>
      </EndingStyled>
    );
  }
}

export default Ending;
