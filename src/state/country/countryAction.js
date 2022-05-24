import { APIService } from "../../core/util/services/APIServices";
import {
  getCountriesFailure,
  getCountriesLoading,
  getCountriesSuccess,
} from "./countrySlice";

export const getCountries = (baseUrl, params) => (dispatch) => {
  dispatch(getCountriesLoading());
  const http = new APIService(baseUrl);
  http
    .getAll(params)
    .then((res) => {
      dispatch(
        getCountriesSuccess({
          data: res.data.map(({ name: { common } }, i) => ({
            id: i,
            label: common,
          })),
        })
      );
    })
    .catch((err) => {
      dispatch(
        getCountriesFailure({
          error: err.message,
        })
      );
    });
};
