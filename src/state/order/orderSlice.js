import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderData: null,
  loading: true,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderLoading: (state) => {
      state.loading = true;
      state.orderData = null;
      state.error = null;
    },
    setOrderSuccess: (state, action) => {
      state.loading = false;
      state.orderData = action.payload.data;
      state.error = null;
    },
    setOrderFailure: (state, action) => {
      state.loading = false;
      state.orderData = null;
      state.error = action.payload.error;
    },
  },
});

export const { setOrderFailure, setOrderLoading, setOrderSuccess } =
  orderSlice.actions;

export const selectOrderDetails = (state) => state?.order?.orderData;

export const selectOrderLoading = (state) => state?.order?.loading;

export const selectOrderError = (state) => state.order.error;

export default orderSlice.reducer;
