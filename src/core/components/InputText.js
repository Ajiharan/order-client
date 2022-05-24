import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const InputText = ({ formik, name, placeholder }) => {
  return (
    <React.Fragment>
      <TextField
        name={name}
        placeholder={placeholder}
        {...formik.fieldProps}
        id='standard-basic'
        variant='standard'
      />
      {formik.touched && formik.errors ? (
        <h6>{formik.errors}</h6>
      ) : (
        <h6 style={{ opacity: 0 }}>{"null"}</h6>
      )}
    </React.Fragment>
  );
};

InputText.propTypes = {
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default React.memo(InputText);
