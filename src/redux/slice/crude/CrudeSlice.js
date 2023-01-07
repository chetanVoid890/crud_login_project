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
      state.responseStatus = action.payload.status;
    },
    editCrudeDataSuccess(state, action) {
      state.responseStatus = action.payload.status;
    },
    deleteCrudedataSuccess(state, action) {
      state.responseStatus = "";
    },
    removeStatus(state) {
      state.responseStatus = "";
    },
  },
});

export default slice.reducer;

export const {
  getDataSuccess,
  addCrudeDataSuccess,
  editCrudeDataSuccess,
  deleteCrudedataSuccess,
  removeStatus,
} = slice.actions;
