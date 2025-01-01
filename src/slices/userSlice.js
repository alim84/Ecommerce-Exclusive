import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLoginInfo } = usersSlice.actions;

export default usersSlice.reducer;
