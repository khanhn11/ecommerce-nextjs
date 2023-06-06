import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productItem: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getProductByIdStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.productItem = action.payload;
    },
    getProductByIdFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  getProductByIdStart,
  getProductByIdSuccess,
  getProductByIdFailure,
} = productSlice.actions;

export default productSlice.reducer;
