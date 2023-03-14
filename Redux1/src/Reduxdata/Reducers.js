import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, {
  increment: (state) => {
    state.c += 1;
    console.log(state.c);
  },

  incrementByValue: (state, action) => {
    // state.c += 1
    state.c += action.payload;
    console.log(action.payload);
  },
  decrement: (state, action) => {
    state.c -= 1;
  },
});
