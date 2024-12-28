import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {batch:"alim", classtime:"6PM"},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productdetailsInfo: (state, action) => {
      state.value=action.payload;
    },
  },
});

export const { productdetailsInfo } = productsSlice.actions;

export default productsSlice.reducer;
