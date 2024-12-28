import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../slices/ProductSlice";

export const store = configureStore({
  reducer: {
    productInfo: productsSlice,
  },
});
