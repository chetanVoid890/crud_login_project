import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
  message: "",
  productList: [],
};

const slice = createSlice({
  name: "crude",
  initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.productList = action.payload.data;
    },
    addCrudeData(state, action) {
      // state.productList = action.payload.data;
    },

    deleteCrudeSuccess(state, action) {
      // state.productList = action.payload.data;
    },
  },
});

export default slice.reducer;

// Actions
export const { deleteCrudeSuccess, getDataSuccess, addCrudeData } =
  slice.actions;
