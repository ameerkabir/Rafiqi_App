import React, { Component } from 'react';
import styledComponent from 'styled-components';
const MyButton = styledComponent.button`color: blue`;
console.log(styledComponent);

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  han
  render() {
    const { email } = this.state;
    return (
      <div className="App">
        <label htmlFor="name"> Email Address</label>
        <input
          onChange={this.handleInput}
          value={email}
          type="text"
          name="email"
        />
        <MyButton>ClickMe</MyButton>{' '}
      </div>
    );
  }
}

export default App;
