import { createSlice, current } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

const initialState = {
  cartArr: [],
  // totalAmount: 0,
  // totalCount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.cartArr.find((item, index) => {
        return item.id === Data[action.payload].id;
      });
      if (item) {
        item.count++;
      } else {
        state.cartArr.push(Data[action.payload]);
        console.log(item);
      }
    },
    decrement: (state, action) => {
     state.cartArr = state.cartArr.filter((item)=>{
        return item.id !== action.payload
      })
     
    },
    getTotalAmount: (state) => {
      let { totalAmount, totalCount } = state.cart.ca;
    },
    // increase: (state, action) => {
    //   state.items = state.cartArr.map((item) => {
    //     if (item.id === action.payload) {
    //       return { ...item, amount: item.amount + 1 };
    //     }
    //   });
    // },
  },
});

export const { increment, decrement, increase } = CartSlice.actions;

export default CartSlice.reducer;
