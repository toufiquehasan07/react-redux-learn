import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "./bugs";

const store = configureStore({
  reducer: bugReducer,
});

export default store;
