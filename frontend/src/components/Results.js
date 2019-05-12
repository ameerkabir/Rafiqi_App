import React, { Component } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  /* display: grid;
  grid-auto-columns: repeat(2, 2fr);
  grid-auto-columns: 1fr; */
`;
const FlexContainer = styled.div`
  /* display: grid; */
  /* display: flex;
  justify-content: center;
  align-content: center; */
`;
const ListItem = styled.li`
  /* display: flex; */
  /* margin: 0 auto; */
  /* background: cyan; */
  /* flex-shrink: 1; */
`;

export default class Results extends Component {
  render() {
    const { data } = this.props.results;
    console.log(data);
    return (
      <Wrapper>
        {!data ? (
          <p>....Loading</p>
        ) : !Array.isArray(data.data) ? (
          <p>{data.message}</p>
        ) : (
          data && (
            <FlexContainer>
              <div>
                Based on our lookup, we suggest the following opportunities:
              </div>
              <br />

              <ul>
                {data.data.map(item => {
                  return (
                    <ListItem>
                      {`A ${item.category} in ${item.theme} ${
                        item.city === "any" ? "" : `in ${item.city}`
                      } provided by  ${
                        item.opportunity_name
                      } and delivered in an  ${item.mode_of_delivery} mode. `}
                      To subscribe please register{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.info}
                      >
                        here
                      </a>
                    </ListItem>
                  );
                })}
              </ul>
            </FlexContainer>
          )
        )}
      </Wrapper>
    );
  }
}
