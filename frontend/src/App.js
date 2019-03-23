import React, { Component, Fragment } from "react";
import styled from "styled-components";
// import Routers from "./routers";
import Steps from "./components/Steps";

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 12px;
//   margin: 2px auto;
//   max-height: 1000%;
// `;
const Header = styled.h3`
  display: flex;
  background: gold;
  justify-content: center;
  align-content: center;
`;
class App extends Component {
  render() {
    return (
      <Fragment children="container">
        <Header>Rafiqi App</Header>
        <Steps />
      </Fragment>
    );
  }
}

export default App;
