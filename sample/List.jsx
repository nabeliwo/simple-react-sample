import React, { PropTypes } from 'react';

const List = ({ memo }) =>
  <div>
    <p>メモの数：{memo.length}個</p>
    <ul>
      {memo.map(item =>
        <li key={item.id}>{item.content}</li>
      )}
    </ul>
  </div>;

List.propTypes = {
  memo: PropTypes.array.isRequired
};

export default List;
