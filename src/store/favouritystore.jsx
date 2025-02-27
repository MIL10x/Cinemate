import { configureStore } from "@reduxjs/toolkit";
import { favourreducer } from "./favouriteslice";

const store = configureStore({
  reducer: {
    favourState: favourreducer,
  },
});

export default store;
