import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../../../state/user/userAction";
import { setOrderSuccess } from "../../../state/order/orderSlice";
import {
  selectUserDetails,
  selectUserError,
} from "../../../state/user/userSlice";
import {
  selectAddressDetails,
  selectAddressError,
} from "../../../state/address/addressSlice";
import { selectInteresError } from "../../../state/interest/interestSlice";

const useValidation = (baseUrl, orderPath, addressPath, interestPath) => {
  const [formData, setFormData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const userDetails = useSelector(selectUserDetails);
  const userAddress = useSelector(selectAddressDetails);
  const interestDetailsError = useSelector(selectInteresError);
  const userDetailsError = useSelector(selectUserError);
  const userAddressError = useSelector(selectAddressError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (interestDetailsError || userDetailsError || userAddressError) {
      dispatch(setOrderSuccess({ data: null }));
      if (userDetailsError) {
        setErrorMsg(userDetailsError.data?.message);
        return;
      }
      if (userAddressError) {
        setErrorMsg(userAddressError.data?.message);
        return;
      }
      if (interestDetailsError) {
        setErrorMsg(interestDetailsError.data?.message);
        return;
      }
    }
  }, [interestDetailsError, userDetailsError, userAddressError, dispatch]);

  useEffect(() => {
    if (
      userDetails &&
      userAddress &&
      !interestDetailsError &&
      !userDetailsError &&
      !userAddressError
    ) {
      dispatch(setOrderSuccess(formData));
    }
  }, [
    userDetails,
    userAddress,
    interestDetailsError,
    dispatch,
    formData,
    userDetailsError,
    userAddressError,
  ]);

  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNo: "",
      email: "",
      country: "",
      auto: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      postcode: "",
      cars: false,
      books: false,
      watches: false,
      laptops: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string().strict().trim().required("Firstname is required"),
      lastName: Yup.string().strict().trim().required("Lastname is required"),
      email: Yup.string()
        .strict()
        .trim()
        .required("email is required")
        .email("invalid email address"),
      phoneNo: Yup.string()
        .required("telephone no is required")
        .matches(phoneRegExp, "Phone number is not valid"),
      country: Yup.string().required(),
      address1: Yup.string().required("Address1 is required"),
      city: Yup.string().required("City is required"),
      postcode: Yup.number().required("postcode is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const {
        firstName,
        lastName,
        email,
        phoneNo,
        address1,
        address2,
        state,
        city,
        postcode,
        country,
        auto,
        ...rest
      } = values;
      dispatch(
        setUserDetail(baseUrl, {
          order: {
            data: { firstName, lastName, email, phoneNo },
            apiSection: orderPath,
          },
          address: {
            data: { address1, address2, state, city, postcode, country },
            apiSection: addressPath,
          },
          interest: { data: rest, apiSection: interestPath },
        })
      );
      setFormData({
        data: {
          user: { firstName, lastName, email, phoneNo },
          address: { address1, address2, state, city, postcode, country },
          interest: rest,
        },
      });
    },
  });
  return { formik, errorMsg };
};

export default useValidation;
