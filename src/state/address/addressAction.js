import { APIService } from "../../core/util/services/APIServices";
import {
  setAddressFailure,
  setAddressLoading,
  setAddressSuccess,
} from "./addressSlice";

export const setAddress = (baseUrl, apiSection, data) => (dispatch) => {
  dispatch(setAddressLoading());
  const http = new APIService(baseUrl, apiSection);
  http
    .create(data)
    .then((res) => {
      dispatch(
        setAddressSuccess({
          data: res.data,
        })
      );
    })
    .catch((err) => {
      dispatch(
        setAddressFailure({
          error: err.response.data,
        })
      );
    });
};
