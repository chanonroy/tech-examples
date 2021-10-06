import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type CheckoutState = "LOADING" | "READY" | "ERROR"

export interface CartState {
  items: { [productID: string]: number };
  checkoutState: CheckoutState
}

const initialState: CartState = {
  items: {},
  checkoutState: "READY"
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload]
    },
    udpateQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity
    }
  },
});

export const { addToCart, removeFromCart, udpateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export const getMemoizedNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
);
