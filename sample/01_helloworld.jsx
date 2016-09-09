import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      name: 'React'
    };
  }

  render() {
    return <div>Hello, {this.state.name}!</div>;
  }
}

render(<App />, document.getElementById('app'));
