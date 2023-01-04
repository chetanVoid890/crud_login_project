import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
  responseStatus: "",
  productList: [],
};

const slice = createSlice({
  name: "crude",
  initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.productList = action.payload.data;
    },
    addCrudeDataSuccess(state, action) {
      console.log("responseStatus===================", action.payload.status);
      state.responseStatus = action.payload.status;
    },
    editCrudeDataSuccess(state, action) {
      // state.productList = action.payload.data;
    },
    deleteCrudedataSuccess(state, action) {
      // state.productList = action.payload.data;
    },
  },
});

export default slice.reducer;

// Actions
export const {
  getDataSuccess,
  addCrudeDataSuccess,
  editCrudeDataSuccess,
  deleteCrudedataSuccess,
} = slice.actions;
