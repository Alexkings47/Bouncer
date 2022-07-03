import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

const CartSlice = createSlice({
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
     state.cartArr.forEach((item)=>{
      const {count, price} = item;
      const ItemTotal = count * price;
     let total = 0;
       total +=ItemTotal
     return {...state, totalAmount:total }
     })
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

export const { increment, decrement, plus, minus, getTotalAmount } = CartSlice.actions;

export default CartSlice.reducer;
