import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../slices/ProductSlice";
import { usersSlice } from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    productdetailsInfo: productsSlice,
    userInfo: usersSlice,
  },
  
});
