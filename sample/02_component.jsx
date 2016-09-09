import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from '../sample/Child';

class Parent extends Component {
  constructor(...args) {
    super(...args);

    this.list = [
      { id: 1, content: 'hoge' },
      { id: 2, content: 'fuga' }
    ];
  }

  render() {
    return <Child list={this.list} />;
  }
}

render(<Parent />, document.getElementById('app'));
