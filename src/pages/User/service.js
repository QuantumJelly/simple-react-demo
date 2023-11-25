import api from "../../utils/api";
import { notification } from 'antd';

export const fetchUser = async dispatch => {
  try {
    dispatch({
      type: 'user/SET_LOADING',
      payload: true,
    });

    const { results } = await api.get('/api?results=25');

    dispatch({
      type: 'user/PUT_USERS',
      payload: results,
    });

    dispatch({
      type: 'user/SET_LOADING',
      payload: false,
    });

    notification.success({
      message: 'Fetch Users Success',
    });
  } catch (e) {
    dispatch({
      type: 'user/SET_LOADING',
      payload: false,
    });

    notification.error({
      message: e,
    });
  }
};

export const deleteUser = async (dispatch, id) => {
  try {
    dispatch({
      type: 'user/SET_LOADING',
      payload: true,
    });

    dispatch({
      type: 'user/DELETE_USER',
      payload: id,
    });

    dispatch({
      type: 'user/SET_LOADING',
      payload: false,
    });

    notification.success({
      message: 'Delete Users Success',
    });
  } catch (e) {
    dispatch({
      type: 'user/SET_LOADING',
      payload: false,
    });

    notification.error({
      message: e,
    });
  }
};

export const addUser = async (dispatch) => {
  try {
    dispatch({
      type: 'user/SET_LOADING',
      payload: true,
    });

    const { results } = await api.get('/api');

    dispatch({
      type: 'user/ADD_USER',
      payload: results[0],
    });

    dispatch({
      type: 'user/SET_LOADING',
      payload: false,
    });

    notification.success({
      message: 'Add Users Success',
    });
  } catch (e) {
    dispatch({
      type: 'user/SET_LOADING',
      payload: false,
    });

    notification.error({
      message: e,
    });
  }
};
