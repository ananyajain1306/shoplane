import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"; 
import favReducer from "./Favslice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favReducer, 
  },
});

export default store;
