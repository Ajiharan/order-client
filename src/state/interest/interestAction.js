import { APIService } from "../../core/util/services/APIServices";
import {
  setInterestFailure,
  setInterestLoading,
  setInterestSuccess,
} from "./interestSlice";

export const setInterest = (baseUrl, apiSection, data) => (dispatch) => {
  dispatch(setInterestLoading());
  const http = new APIService(baseUrl, apiSection);
  http
    .create(data)
    .then((res) => {
      dispatch(
        setInterestSuccess({
          data: res.data,
        })
      );
    })
    .catch((err) => {
      dispatch(
        setInterestFailure({
          error: err.response.data,
        })
      );
    });
};
