import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/User/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
