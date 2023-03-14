import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    d: 1,
}

export const costumReducer2 = createReducer (initialState,{
    decrementByValue : (state, action) => {
      state.d -= action.payload
      console.log(action.payload)
      console.log(state.d)
      console.log(action)
    }
})