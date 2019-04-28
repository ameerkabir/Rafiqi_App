import React, { Component } from "react";
import axios from "axios";
import Forms from "./Forms";
import Results from "./Results";
export const steps = {
  one: 1,
  result: 2
};

export default class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: steps.one,
      values: [],
      results: []
    };
  }
  async componentDidMount() {
    this.postData();
  }

  saveAndGoTo = async (values, currentStep, toStep) => {
    toStep = steps.result;
    const { step } = this.state;
    values = {
      ...this.state.values,
      [currentStep]: values,
      ...this.state.data
    };

    this.setState({
      values: values,
      step: toStep
    });
  };

  postData = async values => {
    if (!values) return;
    console.log("values of postdata func", values);

    try {
      const url = "http://localhost:4000/search";
      const dataToPost = await axios.post(url, values);
      debugger;
      const data = await dataToPost;
      this.setState({
        results: data
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    switch (this.state.step) {
      case steps.one:
        return (
          <Forms saveAndGoTo={this.saveAndGoTo} postData={this.postData} />
        );
      case steps.result:
        return (
          <Results
            values={this.state.values}
            saveAndGoTo={this.saveAndGoTo}
            results={this.state.results}
          />
        );
      default:
        return (
          <Forms saveAndGoTo={this.saveAndGoTo} postData={this.postData} />
        );
    }
  }
}
