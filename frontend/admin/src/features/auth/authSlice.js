import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { email: "email", token: "123@321", loginStatus: true },
  reducers: {
    setCredentials: (state, action) => {
      state.loginStatus = true
    },
    logOut: (state, action) => {
   
      state.loginStatus = false
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer;

export const selectCurrentLoginStatus = (state) => state.auth.loginStatus;