import React, { Component } from 'react';
import { render } from 'react-dom';
import Count from '../sample/Count';
import Manipulator from '../sample/Manipulator';

class Counter extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Count num={this.state.count} />
        <Manipulator text="countUp" method={this.increment} />
      </div>
    );
  }
}

render(<Counter />, document.getElementById('app'));
