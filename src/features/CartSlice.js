import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArr: [],
    likeArr: [],
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
      state.totalAmount = state.cartArr.reduce((acc, item) => {
          let {count, price} = item;
         let itemPrice = count * price;
         console.log("itemPrice")
         return acc += itemPrice
         
        }, 0);
    },
    plus: (state, action) => {
      const index = state.cartArr.findIndex((item) => {
        return item.id === Data[action.payload].id;
      });
      state.cartArr[index].count++;
    },
    like: (state, action) =>{
     const item = state.likeArr.find((item) => {
        return item.id === Data[action.payload].id;
      });
      if (item) {
        return;
      } else {
        state.likeArr.push(Data[action.payload]);
      }
    },
    unlike: (state, action) => {
      state.likeArr = state.likeArr.filter((item) => {
        return item.id !== action.payload;
      });
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
  
}});

export const { increment, decrement, plus, minus, getTotalAmount , like, unlike} =
  CartSlice.actions;

export default CartSlice.reducer;
