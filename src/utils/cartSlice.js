import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items.length > 0) {
        const existingItem = state.items.find(
          (cartItem) =>
            cartItem?.card?.info?.id === action.payload.card?.info?.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (cartItem) =>
          cartItem?.card?.info?.id === action.payload?.card?.info?.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (cartItem) =>
              cartItem?.card?.info?.id !== action.payload.card?.info?.id
          );
        }
      }
    },
    clearCartItems: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
