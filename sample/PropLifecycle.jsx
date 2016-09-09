import React, { Component, PropTypes } from 'react';

class PropLifecycle extends Component {
  componentWillReceiveProps() {
    console.log('componentWillRecieveProps');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <p>count: {this.props.count}</p>
        <button onClick={this.props.increment}>ADD</button>
      </div>
    );
  }
}

PropLifecycle.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};

export default PropLifecycle;
