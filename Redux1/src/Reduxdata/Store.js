import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";
import { costumReducer2 } from "./Reducer2";

const Store = configureStore({
  reducer: {
    custom: customReducer,
    custom2: costumReducer2,
  },
});

export default Store;
