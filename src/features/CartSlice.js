import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArr: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartArr.find((item) => {
        return item.id === action.payload.id;
      });
      if (item) {
        return;
      } else {
        state.cartArr.push(action.payload);
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
        return (acc += itemPrice);
      }, 0);
    },
    updateCount: (state, action) => {
      const index = state.cartArr.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartArr[index].count = action.payload.count;
    },
  },
});

export const {
  addToCart,
  setCartProducts,
  updateCount,
  removeFromCart,
  getTotalAmount,
  like,
  unlike,
} = CartSlice.actions;

export default CartSlice.reducer;
