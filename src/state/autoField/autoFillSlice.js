import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autoFillData: [],
  loading: true,
  error: null,
};

const autoFillSlice = createSlice({
  name: "autoFill",
  initialState,
  reducers: {
    getAutoFillLoading: (state) => {
      state.loading = true;
      state.autoFillData = [];
      state.error = null;
    },
    getAutoFillSuccess: (state, action) => {
      state.loading = false;
      state.autoFillData = action.payload.data;
      state.error = null;
    },
    getAutoFillFailure: (state, action) => {
      state.loading = false;
      state.autoFillData = [];
      state.error = action.payload.error;
    },
  },
});

export const { getAutoFillFailure, getAutoFillLoading, getAutoFillSuccess } =
  autoFillSlice.actions;

export const selectAutoFillDetails = (state) => state?.autoFill?.autoFillData;

export const selectAutoFillLoading = (state) => state?.autoFill?.loading;

export const selectAutoFillError = (state) => state.autoFill.error;
export default autoFillSlice.reducer;
