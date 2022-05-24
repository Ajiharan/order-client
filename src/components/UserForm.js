import React from "react";
import "./styles/order.scss";
import FormField from "../core/components/FormField.js";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const UserForm = ({ formik }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h3 className='order-container-form-title'>YOUR DETAILS</h3>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("firstName"),
              touched: formik.touched["firstName"],
              errors: formik.errors["firstName"],
            }}
            name={"firstName"}
            placeholder={"First Name"}
            type={"text"}
          />
        </Grid>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("lastName"),
              touched: formik.touched["lastName"],
              errors: formik.errors["lastName"],
            }}
            name={"lastName"}
            placeholder={"Last Name"}
            type={"text"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("email"),
              touched: formik.touched["email"],
              errors: formik.errors["email"],
            }}
            name={"email"}
            placeholder={"Email Address"}
            type={"text"}
          />
        </Grid>
        <Grid item xs={4}>
          <FormField
            formik={{
              fieldProps: formik.getFieldProps("phoneNo"),
              touched: formik.touched["phoneNo"],
              errors: formik.errors["phoneNo"],
            }}
            name={"phoneNo"}
            placeholder={"Telephone Number"}
            type={"text"}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

UserForm.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default UserForm;
