import React from 'react';
import { Button } from 'antd';
import { addUser } from '../../service';
import { useDispatch } from 'react-redux';

const CreateButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type={"primary"}
      size={"large"}
      style={{
        marginBottom: 24,
      }}
      onClick={() => addUser(dispatch)}
    >
      Add User
    </Button>
  );
};

export default CreateButton;
