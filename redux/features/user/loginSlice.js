import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action?.payload;
      state.user = user;
      state.token = token;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
