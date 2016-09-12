import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from '../sample/Child';

class Parent extends Component {
  constructor(...args) {
    super(...args);

    this.state.list = [
      { id: 1, content: 'hoge' },
      { id: 2, content: 'fuga' }
    ];
  }

  render() {
    return <Child list={this.state.list} />;
  }
}

render(<Parent />, document.getElementById('app'));
