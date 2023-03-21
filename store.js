import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "./data/FavoriteSlice.js";


export const store = configureStore({
  reducer:{
    favorit:FavoriteSlice
  }
})