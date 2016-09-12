import React, { Component, PropTypes } from 'react';

class Count extends Component {
  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps', props);
  }

  shouldComponentUpdate(props) {
    console.log('shouldComponentUpdate', props);

    if (props.num % 2 === 0) {
      return true;
    }

    return false;
  }

  componentWillUpdate(nextProps) {
    console.log('componentWillUpdate', nextProps);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return <p>Count: {this.props.num}</p>;
  }
}

Count.propTypes = {
  num: PropTypes.number.isRequired
};

export default Count;
