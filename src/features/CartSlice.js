import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../api/Data";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArr: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartArr.find((item) => {
        return item.id === Data[action.payload].id;
      });
      if (item) {
        item.count++;
      } else {
        state.cartArr.push(Data[action.payload]);
      }
    },
    removeFromCart: (state, action) => {
      state.cartArr = state.cartArr.filter((item) => {
        return item.id !== action.payload;
      });
    },
    getTotalAmount: (state) => {
      state.totalAmount = state.cartArr.reduce((acc, item) => {
        let { count, price } = item;
        let itemPrice = count * price;
        console.log("itemPrice");
        return (acc += itemPrice);
      }, 0);
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
          // console.log("recTED");
          return item.id !== action.payload;
        });
      } else {
        console.log("RED");
        state.cartArr[index].count--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  plus,
  minus,
  getTotalAmount,
  like,
  unlike,
} = CartSlice.actions;

export default CartSlice.reducer;
