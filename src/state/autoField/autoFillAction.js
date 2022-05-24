import { APIService } from "../../core/util/services/APIServices";
import {
  getAutoFillFailure,
  getAutoFillSuccess,
  getAutoFillLoading,
} from "./autoFillSlice";

export const getAutoFill = (baseUrl, params) => (dispatch) => {
  dispatch(getAutoFillLoading());
  const http = new APIService(baseUrl);
  http
    .getAll(params)
    .then((res) => {
      dispatch(
        getAutoFillSuccess({
          data: res.data?.results
            .filter(({ postcode }) => Boolean(postcode))
            .map(
              ({
                address_line1,
                address_line2,
                place_id,
                state,
                city,
                postcode,
              }) => {
                return {
                  postcode,
                  address_line1,
                  address_line2,
                  state,
                  city,
                  label: `${address_line1},${address_line2}`,
                  id: place_id,
                };
              }
            ),
        })
      );
    })
    .catch((err) => {
      dispatch(
        getAutoFillFailure({
          error: err.message,
        })
      );
    });
};
