import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginAction } from "./authAction";

const initialState = {
  loading: false,
  error: "",
  token: "",
  username: "",
  logIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.username = "";
      state.logIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        // const { success, token, username, message, monitoringCenter } =
        //   action.payload;
        // if (success) {
        //   state.token = token;
        //   state.username = username;
        //   state.logIn = true;
        //   localStorage.setItem("token", token);
        // } else {
        //   state.token = "";
        //   state.error = message;
        //   localStorage.removeItem("token");
        // }
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = "Username or Password is not correct";
        localStorage.removeItem("token");
        // state.error = action.error.message
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
