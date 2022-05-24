import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getCountries } from "../state/country/countryAction";
import { selectCountriesDetails } from "../state/country/countrySlice";
import { selectAutoFillDetails } from "../state/autoField/autoFillSlice";
import { getAutoFill } from "../state/autoField/autoFillAction";
import FormGroup from "@mui/material/FormGroup";
import CustomButton from "../core/components/CustomButton.js";

import UserForm from "./UserForm.js";
import AddressForm from "./AddressForm.js";
import InterestForm from "./InterestForm";
import "./styles/order.scss";
import ErrorBoundary from "../core/util/Error/ErrorBoundary";
import useValidation from "../core/util/validation/useValidation";

const OrderForm = () => {
  const [params, setParams] = useState(null);
  const { formik, errorMsg } = useValidation(
    "https://c2dee09a-8189-4ac4-8267-efaee2721977.mock.pstmn.io",
    "order",
    "address",
    "interest"
  );

  const fieldValue = formik.getFieldProps("auto").value;
  const countryName = formik.getFieldProps("country").value;

  useEffect(() => {
    setParams({
      text: fieldValue,
      country: countryName,
      limit: 5,
      format: "json",
      apiKey: "ba6be736fe7e4bf98fe3400182432e32",
    });
  }, [fieldValue, countryName]);

  const onEventUpdate = (data) => {
    if (data?.id) {
      formik.setFieldValue("address1", data.address_line1);
      formik.setFieldValue("address2", data.address_line2);
      formik.setFieldValue("state", data.state);
      formik.setFieldValue("city", data.city);
      formik.setFieldValue("postcode", data.postcode);
    }
  };

  return (
    <div className='order-container'>
      <h2>{errorMsg}</h2>
      <form
        className='order-container-form'
        id='frm'
        onSubmit={formik.handleSubmit}
      >
        <ErrorBoundary>
          <UserForm formik={formik} />
        </ErrorBoundary>

        <ErrorBoundary>
          <AddressForm
            formik={formik}
            selectCountriesDetails={selectCountriesDetails}
            getCountries={getCountries}
            selectAutoFillDetails={selectAutoFillDetails}
            getAutoFill={getAutoFill}
            params={params}
            onEventUpdate={onEventUpdate}
          />
        </ErrorBoundary>

        <FormGroup>
          <p className='order-form-checkbox-title'>
            i'd like to hear mre about...
          </p>
          <Grid container spacing={0}>
            <ErrorBoundary>
              <InterestForm formik={formik} />
            </ErrorBoundary>
            <Grid item xs={2}>
              <div className='collapse-straight-line'></div>
            </Grid>
            <Grid item xs={2}>
              <CustomButton />
            </Grid>
          </Grid>
        </FormGroup>
      </form>
    </div>
  );
};

export default OrderForm;
