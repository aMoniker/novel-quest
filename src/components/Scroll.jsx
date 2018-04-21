import React from 'react';
import styled from 'styled-components';
import Line from 'app/components/Line';

const ScrollStyled = styled.div`
  background: linear-gradient(rgba(218, 165, 32, 0.5), rgba(218, 165, 32, 0.5)), url('images/paper.png');
  height: 100%;
  box-shadow: 0 10px 5px 0 black;
  padding: 20px;
  font-family: 'Crimson Text', serif;
  font-size: 24px;
  max-width: 666px;
  margin: 0 auto;
`;

class Scroll extends React.Component {
  renderLine(text) {
    return <Line text={text} />;
  }

  render() {
    const text = [`She walked along the path.`, `She saw a tiger.`, `The tiger ate her.`];
    return (
      <ScrollStyled>{text.map((t) => this.renderLine(t))}</ScrollStyled>
    );
  }
}

export default Scroll;
