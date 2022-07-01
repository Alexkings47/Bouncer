import { createSlice, current } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArr: [],
    totalAmount: 0,
  },
  reducers: {
    increment: (state, action) => {
      const item = state.cartArr.find((item, index) => {
        return item.id === Data[action.payload].id;
      });
      if (item) {
        item.count++;
      } else {
        state.cartArr.push(Data[action.payload]);
      }
    },
    decrement: (state, action) => {
      state.cartArr = state.cartArr.filter((item) => {
        return item.id !== action.payload;
      });
    },
    getTotalAmount: (state) => {
      let amount = 0;
      state.cartArr.forEach((item) => {
        amount += item.price;
      });
      state.totalAmount = amount;
    },
    plus: (state, action) => {
      const index = state.cartArr.findIndex((item) => {
        return item.id === Data[action.payload].id;
      });
      state.cartArr[index].count++;
    },
    minus: (state, action) => {
      const index = state.cartArr.findIndex((item) => {
        return item.id === Data[action.payload].id;
      });
     
      if (state.cartArr[index].count === 0) {
        state.cartArr = state.cartArr.filter((item) => {
          return item.id !== action.payload;
        });
      } else {
        state.cartArr[index].count--;
      }
    },
  },
});

export const { increment, decrement, plus, minus } = CartSlice.actions;

export default CartSlice.reducer;
