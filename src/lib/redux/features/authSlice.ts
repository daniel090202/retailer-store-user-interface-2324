import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@/models";

const initialState = {
  login: {
    isAuth: false,
    error: false,
    currentUser: undefined,
    isFetching: false,
  } as AuthState,
} as AuthInitialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.login.isFetching = true;
    },
    logInSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data: User;
        accessToken: string;
      }>
    ) => {
      state.login.error = false;
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    logInFail: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.login.error = false;
      state.login.isFetching = true;
      state.login.currentUser = undefined;
    },
    logOutFail: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
  },
});

export const {
  logInFail,
  logOutFail,
  logInStart,
  logOutStart,
  logInSuccess,
  logOutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
