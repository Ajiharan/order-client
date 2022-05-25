import { APIService } from "../../core/util/services/APIServices";
import { setUserFailure, setUserLoading, setUserSuccess } from "./userSlice";

import { setAddress } from "../address/addressAction";
import { setInterest } from "../interest/interestAction";
import { setInterestSuccess } from "../interest/interestSlice";

export const setUserDetail =
  (baseUrl, { order, address, interest }) =>
  (dispatch) => {
    dispatch(setUserLoading());
    const http = new APIService(baseUrl, order.apiSection);
    http
      .create(order.data)
      .then((res) => {
        dispatch(
          setUserSuccess({
            data: res.data,
          })
        );
        dispatch(
          setAddress(baseUrl, address.apiSection, {
            ...address.data,
            uid: res.data?.uid,
          })
        );

        if (Object.values(interest.data).includes(true)) {
          dispatch(
            setInterest(baseUrl, interest.apiSection, {
              ...interest.data,
              uid: res.data?.uid,
            })
          );
        } else {
          dispatch(setInterestSuccess({ data: null }));
        }
      })
      .catch((err) => {
        dispatch(
          setUserFailure({
            error: err.response,
          })
        );
      });
  };
