import React from "react";
import "./styles/order.scss";
import FormField from "../core/components/FormField.js";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const AddressForm = ({
  formik,
  selectCountriesDetails,
  getCountries,
  selectAutoFillDetails,
  getAutoFill,
  params,
  onEventUpdate,
}) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h3 className='order-container-form-title'>YOUR ADDRESS</h3>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("country"),
              touched: formik.touched["country"],
              errors: formik.errors["country"],
            }}
            name={"country"}
            placeholder={"country"}
            type={"select"}
            selector={selectCountriesDetails}
            dispatchFunc={getCountries}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("auto"),
              touched: formik.touched["auto"],
              errors: formik.errors["auto"],
            }}
            name={"auto"}
            placeholder={
              "Type part of address of postcode EC: AM56QH or 84 Sir Matt Busby Way"
            }
            type={"auto"}
            selector={selectAutoFillDetails}
            dispatchFunc={getAutoFill}
            params={params}
            onEventUpdate={onEventUpdate}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("address1"),
              touched: formik.touched["address1"],
              errors: formik.errors["address1"],
            }}
            name={"address1"}
            placeholder={"Address Line 1"}
            type={"text"}
          />
        </Grid>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("address2"),
              touched: formik.touched["address2"],
              errors: formik.errors["address2"],
            }}
            name={"address2"}
            placeholder={"Address Line 2"}
            type={"text"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("city"),
              touched: formik.touched["city"],
              errors: formik.errors["city"],
            }}
            name={"city"}
            placeholder={"Town/City"}
            type={"text"}
          />
        </Grid>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("state"),
              touched: formik.touched["state"],
              errors: formik.errors["state"],
            }}
            name={"state"}
            placeholder={"Country/Province/state"}
            type={"text"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("postcode"),
              touched: formik.touched["postcode"],
              errors: formik.errors["postcode"],
            }}
            name={"postcode"}
            placeholder={"Postal Code"}
            type={"text"}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
AddressForm.propTypes = {
  formik: PropTypes.object.isRequired,
  selectCountriesDetails: PropTypes.any.isRequired,
  getCountries: PropTypes.func.isRequired,
  selectAutoFillDetails: PropTypes.any.isRequired,
  getAutoFill: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  onEventUpdate: PropTypes.func.isRequired,
};
export default AddressForm;
