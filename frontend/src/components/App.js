import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Forms from "./Forms";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 2px auto;
  background: skyblue;
`;
const Header = styled.h3`
  display: flex;
  background: gold;
  justify-content: center;
  align-content: center;
`;
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>HIIIIII</Header>
        <Wrapper>
            <Forms />
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
