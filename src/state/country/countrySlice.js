import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countriesData: [],
  loading: true,
  error: null,
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountriesLoading: (state) => {
      state.loading = true;
      state.countriesData = [];
      state.error = null;
    },
    getCountriesSuccess: (state, action) => {
      state.loading = false;
      state.countriesData = action.payload.data;
      state.error = null;
    },
    getCountriesFailure: (state, action) => {
      state.loading = false;
      state.countriesData = [];
      state.error = action.payload.error;
    },
  },
});

export const { getCountriesLoading, getCountriesSuccess, getCountriesFailure } =
  countrySlice.actions;

export const selectCountriesDetails = (state) => state?.country?.countriesData;

export const selectCountriesLoading = (state) => state?.country?.loading;

export const selectCountriessError = (state) => state.country.error;
export default countrySlice.reducer;
