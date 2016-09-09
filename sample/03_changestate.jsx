import React, { Component } from 'react';
import { render } from 'react-dom';
import Count from '../sample/Count';

class Counter extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <Count num={this.state.count} />
      </div>
    );
  }
}

render(<Counter />, document.getElementById('app'));
