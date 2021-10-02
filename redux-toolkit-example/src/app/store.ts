import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

// Generate types for State and Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
