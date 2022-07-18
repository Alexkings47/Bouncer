import { createSlice } from "@reduxjs/toolkit";

const entity = "product list";

const initialState = {
  products: [],
 
};

const productSlice = createSlice({
  name: entity,
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    toggleLikeProducts: (state, action) => {
      const pos = state.products.findIndex((el) => action.payload.id === el.id);
      if (pos > -1) {
        const obj = state.products[pos];
        state.products[pos] = { ...obj, isLiked: !obj.isLiked };
      }
    },
    addCount: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );
      if (index > -1) {
        const obj = state.products[index];
        state.products[index] = { ...obj, count: obj.count++ };
        console.log("products")
      }
    },
    reduceCount: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );
      if (index > -1) {
        const obj = state.products[index];
        state.products[index] = { ...obj, count: obj.count-- };
      }
    },
  },
});

export const productActions = { ...productSlice.actions };

export default productSlice.reducer;
