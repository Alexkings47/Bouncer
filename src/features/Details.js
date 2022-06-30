import { createSlice } from "@reduxjs/toolkit";
 
const initialState = [];

export const DetailsSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
  
    update: (state, action) => {
      state = action.payload;
      return state
  }
}});

export const { update } = DetailsSlice.actions;

export default DetailsSlice.reducer;
