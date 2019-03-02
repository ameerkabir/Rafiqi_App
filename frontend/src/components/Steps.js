import React, { Component } from "react";
import Forms from "./Forms";
import Home from "./Home";
export const steps = {
  one: 1,
  result: 2
};

export default class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: steps.one,
      values: []
    };
  }
  saveAndGoTo = async (values, currentStep, toStep) => {
    // it's the last step

    toStep = steps.result;
    const { step } = this.state;
    console.log(step);
    values = {
      ...this.state.values,
      [currentStep]: values
    };
    debugger;
    this.setState({
      values: values,
      step: toStep
    });
  };
  render() {
    switch (this.state.step) {
      case steps.one:
        return <Forms saveAndGoTo={this.saveAndGoTo} />;
      case steps.result:
        return (
          <Home values={this.state.values} saveAndGoTo={this.saveAndGoTo} />
        );
      default:
        return <Home />;
    }
  }
}
