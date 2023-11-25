import React from 'react';
import './index.css';

const UserCell = ({ data }) => {
  const { name, picture, login } = data;

  return (
    <div className="user-cell">
      <img src={picture?.thumbnail} alt={""} />
      <div className="user-cell-name">
        <div>{`${name?.first} ${name?.last}`}</div>
        <div>{login?.username}</div>
      </div>
    </div>
  );
};

export default UserCell;
