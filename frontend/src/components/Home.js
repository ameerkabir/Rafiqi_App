import React, { Component } from "react";
import styled from "styled-components";
const Wrapper = styled.ol`
  display: grid;
  grid-auto-columns: repeat(2, 2fr);
  grid-auto-columns: 1fr;
`;
const FlexContainer = styled.div`
  /* display: grid; */
  justify-content: center;
  align-content: center;
`;
// @Todo after implementing the node bit you can use the below function to display the actual results from the backend
const RenderValues = ({ values }) => {
  return values && values[1].fullName;
};
export default class Home extends Component {
  render() {
    console.log(this.props.values);
    return (
      <Wrapper>
        <h4>Here is the result</h4>
        <br />
        <p>
          <strong>
            applicant can find a job locally if he/she enhances his/her language
            skills
          </strong>
        </p>
        <br />

        <li>
          we suggest a integration related Training opportunity provided by PMI
          Institute. Here is an{" "}
          <a
            href="mailto:academic-outreach@pmi-netherlands-chapter.org"
            target="_blank"
          >
            email
          </a>
        </li>
        <br />

        <li>
          {" "}
          we suggest a integration related Training opportunity provided by
          Refugee Start Force you can now apply here:{" "}
          <a href="https://refugeestartforce.eu" target="blank">
            refugeestartforce.eu
          </a>
        </li>
        <br />

        <p>
          if you have questions or need a mentor to guide you through the
          application process, contact us at contact@rafiqi.net
        </p>
      </Wrapper>
    );
  }
}
