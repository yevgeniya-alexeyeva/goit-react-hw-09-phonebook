import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const createUser = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    const {
      auth: { token: currentToken },
    } = thunkAPI.getState();

    console.log("currentToken before", currentToken);
    if (!currentToken) return thunkAPI.rejectWithValue();
    console.log("currentToken after", currentToken);
    token.set(currentToken);

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
