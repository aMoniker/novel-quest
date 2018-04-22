import React from 'react';
import styled from 'styled-components';
import crypto from 'crypto';


const ChoiceStyled = styled.select`
`;

const OptionStyled = styled.option`
`;

class Choice extends React.Component {
  render() {
    const { choices, onChoice } = this.props;
    const defaultChoice = <OptionStyled key="-">...</OptionStyled>;
    return (<ChoiceStyled onChange={onChoice}>{defaultChoice}{
      choices.map((c, i) => {
        const str = JSON.stringify(c);
        const hash = crypto.createHash('md5').update(str).digest('hex');
        return <OptionStyled key={hash} value={i}>{c.text}</OptionStyled>;
      })
    }</ChoiceStyled>);
  }
}

export default Choice;
