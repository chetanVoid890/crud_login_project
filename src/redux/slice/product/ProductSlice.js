import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
  productList: [],
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductSuccess(state, action) {
      state.productList = action.payload.data;
    },
  },
});

export default slice.reducer;

// Actions
export const { getProductSuccess } = slice.actions;
