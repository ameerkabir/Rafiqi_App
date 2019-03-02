import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { withFormik, Form, Field } from 'formik';
// import { steps } from './Steps';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: grid;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
export default class Home extends Component {
  render() {
    // const { values } = this.props;
    console.log(this.props.saveAndGoTo);
    return (
      <Wrapper>
        <FlexContainer>
          hiiii
          {/* {values &&
            values(values).map(item => {
              return (
                <ul>
                  <li>{item}</li>
                </ul>
              );
            })} */}
        </FlexContainer>
      </Wrapper>
    );
  }
}
