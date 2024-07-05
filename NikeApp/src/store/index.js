import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  // store is the combination of the state and the reducers are our functions that update the state
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
