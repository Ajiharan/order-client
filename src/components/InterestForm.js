import React from "react";
import Grid from "@mui/material/Grid";
import InputCheck from "../core/components/InputCheck";
import PropTypes from "prop-types";
const InterestForm = ({ formik }) => {
  return (
    <React.Fragment>
      <Grid item xs={2}>
        <InputCheck
          formik={{
            fieldProps: formik.getFieldProps("cars"),
            touched: formik.touched["cars"],
            errors: formik.errors["cars"],
          }}
          name={"cars"}
          placeholder={"cars"}
          type={"check"}
          label='cars'
        />
      </Grid>
      <Grid item xs={2}>
        <InputCheck
          formik={{
            fieldProps: formik.getFieldProps("books"),
            touched: formik.touched["books"],
            errors: formik.errors["books"],
          }}
          name={"books"}
          placeholder={"books"}
          type={"check"}
          label='books'
        />
      </Grid>
      <Grid item xs={2}>
        <InputCheck
          formik={{
            fieldProps: formik.getFieldProps("watches"),
            touched: formik.touched["watches"],
            errors: formik.errors["watches"],
          }}
          name={"watches"}
          placeholder={"watches"}
          type={"check"}
          label='watches'
        />
      </Grid>
      <Grid item xs={2}>
        <InputCheck
          formik={{
            fieldProps: formik.getFieldProps("laptops"),
            touched: formik.touched["laptops"],
            errors: formik.errors["laptops"],
          }}
          name={"laptops"}
          placeholder={"laptops"}
          type={"check"}
          label='laptops'
        />
      </Grid>
    </React.Fragment>
  );
};

InterestForm.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default InterestForm;
