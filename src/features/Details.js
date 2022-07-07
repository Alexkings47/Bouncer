import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const DetailsSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    update: (state, action) => {
      if (action.payload[0] === undefined) {
        return state;
      } else {
        state = action.payload;
        return state;
      }

      // console.log(action.payload)
    },
  },
});

export const { update } = DetailsSlice.actions;

export default DetailsSlice.reducer;
