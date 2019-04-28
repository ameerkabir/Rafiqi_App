import React, { Component } from "react";
import styled from "styled-components";
const Wrapper = styled.ol`
  display: grid;
  grid-auto-columns: repeat(2, 2fr);
  grid-auto-columns: 1fr;
`;
const FlexContainer = styled.div`
  /* display: grid; */
  display: flex;
  justify-content: center;
  align-content: center;
`;
const ListItem = styled.li`
  display: flex;
  margin: 0 auto;
  background: cyan;
  flex-shrink: 1;
`;

export default class Results extends Component {
  render() {
    const { data } = this.props.results;
    console.log("props in result component", data);
    return (
      <Wrapper>
        {!data ? (
          <p>....Loading</p>
        ) : (
          data && (
            <FlexContainer>
              <ul>
                {" "}
                <ListItem>{data.data.map(item => item.Theme)}</ListItem>
              </ul>
            </FlexContainer>
          )
        )}
      </Wrapper>
    );
  }
}
