import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [createUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [fetchCurrentUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
    [logoutUser.fulfilled]: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    [logoutUser.pending]: (state) => {
      state.loading = true;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
