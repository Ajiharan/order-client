import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  interestResponse: null,
  loading: true,
  error: null,
};

const interestSlice = createSlice({
  name: "interest",
  initialState,
  reducers: {
    setInterestLoading: (state) => {
      state.loading = true;
      state.interestResponse = null;
      state.error = null;
    },
    setInterestSuccess: (state, action) => {
      state.loading = false;
      state.interestResponse = action.payload.data;
      state.error = null;
    },
    setInterestFailure: (state, action) => {
      state.loading = false;
      state.interestResponse = null;
      state.error = action.payload.error;
    },
  },
});

export const { setInterestFailure, setInterestLoading, setInterestSuccess } =
  interestSlice.actions;

export const selectInterestDetails = (state) => state?.interest?.orderResponse;

export const selectInteresLoading = (state) => state?.interest?.loading;

export const selectInteresError = (state) => state.interest.error;

export default interestSlice.reducer;
