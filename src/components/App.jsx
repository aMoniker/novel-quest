import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Scroll from 'app/components/Scroll';

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

const AppStyled = styled.div`
  height: 100%;
  width: 100%;
  background: url('images/dark-wood.png');
  padding: 50px;
`;

class App extends React.Component {
  render() {
    return (
      <AppStyled>
        <Scroll />
      </AppStyled>
    );
  }
}

export default App;
