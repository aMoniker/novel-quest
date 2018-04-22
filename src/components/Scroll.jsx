import React from 'react';
import styled from 'styled-components';
import Line from 'app/components/Line';
import Choice from 'app/components/Choice';
import { nodes, CHOICE } from 'app/modules/nodes';

const ScrollStyled = styled.div`
  background-image: linear-gradient(rgba(218, 165, 32, 0.25), rgba(218, 165, 32, 0.25)), url('images/paper.png');
  background-attachment: fixed, scroll;
  overflow: scroll;
  height: 100%;
  box-shadow: 0 10px 5px 0 black;
  padding: 20px;
  font-family: 'Crimson Text', serif;
  font-size: 24px;
  max-width: 666px;
  margin: 0 auto;
`;

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ['start'],
      chosen: [],
    };
  }

  getPathNodes() {
    return this.state.path.map((n) => nodes[n]);
  }

  makeChoice = (e) => {
    let index = e.target.selectedIndex - 1;
    if (index < 0) { return; }
    const { chosen, path } = this.state;
    const pathNodes = this.getPathNodes();
    const completedNode = pathNodes[pathNodes.length - 1];
    path.push(completedNode.pick[index].next);
    chosen.push(index);
    this.setState({path, chosen});
  }

  renderNodes() {
    const nodes = this.getPathNodes();
    const { chosen } = this.state;
    return nodes.map((n, i) => {
      const last = (i === nodes.length - 1);
      const choice = last ? this.renderChoice(n) : n.pick[chosen[i]].text;
      const text = (typeof n.text === 'function') ? n.text() : n.text;
      const parts = text.split(CHOICE);
      return <Line key={i}>{parts[0]}{choice}{parts[1]} </Line>;
    });
  }

  renderChoice(node) {
    return <Choice choices={node.pick} onChoice={this.makeChoice}></Choice>
  }

  render() {
    return (
      <ScrollStyled>{this.renderNodes()}</ScrollStyled>
    );
  }
}

export default Scroll;
