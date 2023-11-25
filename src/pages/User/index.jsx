import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';

import { fetchUser, deleteUser } from './service';

import UserCell from './components/UserCell';
import ExpandUserCell from './components/ExpandUserCell';
import CreateButton from './components/CreateButton';
import LocationCell from './components/LocationCell';

const User = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.user);

  useEffect(() => {
    fetchUser(dispatch);
  }, []);

  const handleDelete = (row) => {
    deleteUser(dispatch, row?.login?.uuid);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, row) => {
        return <UserCell data={row} />;
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: value => {
        return <LocationCell location={value} />;
      },
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: (_, row) => (
        <a onClick={() => handleDelete(row)}>Delete</a>
      ),
    },
  ];

  return (
    <Fragment>
      <CreateButton />
      <Table
        rowKey={(record) => record?.login?.uuid}
        columns={columns}
        dataSource={users}
        loading={loading}
        pagination={false}
        expandable={{
          expandedRowRender: record => <ExpandUserCell data={record} />,
        }}
      />
    </Fragment>
  );
};

export default User;
