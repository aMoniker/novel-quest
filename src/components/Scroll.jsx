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
      current: 'start',
      path: [],
    };
  }

  makeChoice = (e) => {
    let index = e.target.selectedIndex - 1;
    if (index < 0) { return; }

    const { path } = this.state;
    const node = this.getCurrentNode();
    const chosen = node.pick[index];
    const current = chosen.next;
    path.push(this.getNodeText(node).replace(CHOICE, chosen.text));

    if (chosen.sets) {
      // set vars
    }

    this.setState({current, path});
  }

  setVariables() {

  }

  getCurrentNode() {
    return nodes[this.state.current];
  }

  getNodeText(node) {
    return (typeof node.text === 'function') ? node.text() : node.text;
  }

  renderPath() {
    return this.state.path.map((text, i) => <Line key={i}>{text} </Line>);
  }

  renderCurrent() {
    const node = this.getCurrentNode();
    const choice = this.renderChoice(node);
    const parts = this.getNodeText(node).split(CHOICE);
    return <Line key={this.state.current}>{parts[0]}{choice}{parts[1]} </Line>;
  }

  renderChoice(node) {
    return <Choice choices={node.pick} onChoice={this.makeChoice}></Choice>
  }

  render() {
    return (
      <ScrollStyled>{this.renderPath()}{this.renderCurrent()}</ScrollStyled>
    );
  }
}

export default Scroll;
