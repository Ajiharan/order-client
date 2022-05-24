import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

const InputCheck = ({ formik, name, placeholder, label }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            placeholder={placeholder}
            {...formik.fieldProps}
          />
        }
        label={label}
      />
    </div>
  );
};

InputCheck.propTypes = {
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputCheck;
