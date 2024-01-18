import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {name: null, email: null, password: null, token: null, loginStatus: false },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.email = user
      state.token = accessToken
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