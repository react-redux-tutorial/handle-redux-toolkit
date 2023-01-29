import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
  	//user 정보를 위한 userReducer 설정
    user: userReducer,
  },
});