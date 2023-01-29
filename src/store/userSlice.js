import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  //초기 세팅값 null로 설정
  name: 'user',
  initialState:{
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
    token: localStorage.getItem("testToken"),
  },
  reducers: {
  	//reducer 중 login이 작동하면, 전달받은 유저정보를 해당하는 값에 저장
    loginAction: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.token = action.payload.token;
    },
    //reducer 중 logout이 작동하면 token을 null로 바꾼다
    logoutAction: (state) => {
      state.token = null;
    },
  },
});

//login, logout을 reducer의 action으로 설정
export const { loginAction, logoutAction } = userSlice.actions;

//다른 컴포넌트들에서도 user정보를 가져다 쓸 수 있도록 selector 설정
export const selectUser = (state) => state;
export const selectUserToken = (state) => state.user.token;

export default userSlice.reducer;