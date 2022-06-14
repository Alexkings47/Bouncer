import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/Data";
 

const initialState = {
  cartArr: [],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cartArr.push( Data[action.payload] );
    },
    decrement: (state, action) => {
      state.cartArr.slice(0, action.payload);
      console.log(state.cartArr)

    },
    
  },
});

export const { increment, decrement } = CartSlice.actions;

export default CartSlice.reducer;
