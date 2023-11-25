import React from 'react';

import './index.css';

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDay()}`;
};

const Divider = () => {
  return <div className="divider" />;
};

const Cell = ({ title, value }) => {
  return (
    <div className="expand-cell-texts">
      <div>
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

const ExpandUserCell = ({ data }) => {
  const { email, phone, cell, registered, dob } = data;

  return (
    <div className="expand-cell-group">
      <Cell title={'Email'} value={email} />
      <Divider />
      <Cell title={'Phone'} value={phone} />
      <Cell title={'Registered Date'} value={formatDate(registered?.date)} />
      <Divider />
      <Cell title={'Cell'} value={cell} />
      <Cell title={'Birthday'} value={formatDate(dob?.date)} />
    </div>
  )
};

export default ExpandUserCell;
