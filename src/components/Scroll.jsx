import React from 'react';
import styled from 'styled-components';
import Line from 'app/components/Line';
import Choice from 'app/components/Choice';
import Beginning from 'app/components/Beginning';
import Ending from 'app/components/Ending';
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
    this.state = this.getInitialState();
  }

  reset = () => {
    this.setState(this.getInitialState());
  }

  getInitialState() {
    return {
      current: 'start',
      path: [],
      vars: {},
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
      const vars = {...this.state.vars, ...chosen.sets};
      this.setState({vars});
    }

    this.setState({current, path});
  }

  getCurrentNode() {
    return nodes[this.state.current];
  }

  getNodeText(node) {
    return (typeof node.text === 'function')
      ? node.text(this.state.vars) : node.text;
  }

  renderPath() {
    return this.state.path.map((text, i) => <Line key={i}>{text} </Line>);
  }

  renderCurrent() {
    const node = this.getCurrentNode();
    if (node.end) {
      return this.renderEnding(node);
    }
    const choice = this.renderChoice(node);
    const parts = this.getNodeText(node).split(CHOICE);
    return <Line key={this.state.current}>{parts[0]}{choice}{parts[1]} </Line>;
  }

  renderEnding(node) {
    return (
      <React.Fragment>
        <Line key="end">{this.getNodeText(node)}</Line>
        <Ending reset={this.reset} />
      </React.Fragment>
    );
  }

  renderChoice(node) {
    return <Choice choices={node.pick} onChoice={this.makeChoice}></Choice>
  }

  render() {
    return (
      <ScrollStyled><Beginning />{this.renderPath()}{this.renderCurrent()}</ScrollStyled>
    );
  }
}

export default Scroll;
