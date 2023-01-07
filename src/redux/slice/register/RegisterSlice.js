import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    email: "",
    password: "",
    token: false,
  },

  reducers: {
    LoginSuccess: (state, action) => {
      state.email = action.payload.email;
      state.user = action.payload.email;
      state.token = true;
    },
    logInFail: (state, action) => {
      state.token = false;
      state.email = "";
      state.password = "";
    },
    logout: (state, action) => {
      state.token = false;
      state.email = "";
      state.password = "";
    },
  },
});

export const { LoginSuccess, logInFail, logout } = authSlice.actions;

export default authSlice.reducer;
