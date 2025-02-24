import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: "Cart",
  initialState: {
    item: [],
  },
  reducers: {
    addCartItem(state, action) {
      const existingItem = state.item.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.item.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1; 
      }
    },
    decreaseQuantity(state, action) {
      const item = state.item.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    },
  },
});

export const { addCartItem, removeCartItem, increaseQuantity, decreaseQuantity } = Cartslice.actions;
export default Cartslice.reducer;
