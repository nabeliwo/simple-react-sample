import React, { PropTypes } from 'react';

const Count = ({ num }) => <p>Count: {num}</p>;

Count.propTypes = {
  num: PropTypes.number.isRequired
};

export default Count;
