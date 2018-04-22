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
      displayedNodes: ['start'],
    };
  }

  getDisplayedNodes() {
    return this.state.displayedNodes.map((n) => nodes[n]);
  }

  makeChoice = (e) => {
    let index = e.target.selectedIndex - 1;
    if (index < 0) { return; }
    const displayedNodes = this.getDisplayedNodes();
    const completedNode = displayedNodes[displayedNodes.length - 1];
    completedNode.chosen = index;
    const newNodes = this.state.displayedNodes;
    newNodes.push(completedNode.pick[index].next);
    this.setState({
      displayedNodes: newNodes
    });
  }

  renderNodes() {
    const nodes = this.getDisplayedNodes();
    return nodes.map((n, i) => {
      const last = (i === nodes.length - 1);
      const choice = last ? this.renderChoice(n) : n.pick[n.chosen].text;
      const parts = n.text.split(CHOICE);
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
