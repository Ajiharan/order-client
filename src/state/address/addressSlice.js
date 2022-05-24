import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressResponse: null,
  loading: true,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressLoading: (state) => {
      state.loading = true;
      state.addressResponse = null;
      state.error = null;
    },
    setAddressSuccess: (state, action) => {
      state.loading = false;
      state.addressResponse = action.payload.data;
      state.error = null;
    },
    setAddressFailure: (state, action) => {
      state.loading = false;
      state.addressResponse = null;
      state.error = action.payload.error;
    },
  },
});

export const { setAddressFailure, setAddressLoading, setAddressSuccess } =
  addressSlice.actions;

export const selectAddressDetails = (state) => state?.address?.addressResponse;

export const selectAddressLoading = (state) => state?.address?.loading;

export const selectAddressError = (state) => state.address.error;

export default addressSlice.reducer;
