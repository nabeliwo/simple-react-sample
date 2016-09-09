import React, { PropTypes } from 'react';

const Child = ({ list }) =>
  <ul>
    {list.map(item =>
      <li key={item.id}>{item.content}</li>
    )}
  </ul>;

Child.propTypes = {
  list: PropTypes.array.isRequired
};

export default Child;
