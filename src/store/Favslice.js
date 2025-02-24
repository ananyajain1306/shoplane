import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [], 
};

const favSlice = createSlice({
  name: "favorites",
  initialState, 
  reducers: {
    addFavoriteItem: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavoriteItem: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addFavoriteItem, removeFavoriteItem } = favSlice.actions;
export default favSlice.reducer;
