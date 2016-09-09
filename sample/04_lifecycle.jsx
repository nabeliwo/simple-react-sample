import React, { Component } from 'react';
import { render } from 'react-dom';
import PropLifecycle from '../sample/PropLifecycle';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      count: 0,
      childFlag: true
    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div>
        {this.state.childFlag &&
          <PropLifecycle
            count={this.state.count}
            increment={() => { this.setState({ count: this.state.count + 1 }); }}
          />
        }
        <button onClick={() => { this.setState({ childFlag: false }); }}>子要素を削除</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
