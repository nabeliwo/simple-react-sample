import React, { PropTypes } from 'react';

const Manipulator = ({ text, method }) =>
  <button onClick={method}>{text}</button>;

Manipulator.propTypes = {
  text: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired
};

export default Manipulator;
