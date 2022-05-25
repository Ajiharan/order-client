import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import useReduxService from "../util/services/useReduxService";
import PropTypes from "prop-types";
import { COUNTRIES_BASE_URL } from "../util/services/APIBaseUrl";

const SelectField = ({
  formik,
  name,
  placeholder,
  baseUrl = COUNTRIES_BASE_URL,
  selector,
  dispatchFunc,
}) => {
  const { selectorData } = useReduxService(baseUrl, selector, dispatchFunc);

  return (
    <div>
      <Select
        id='demo-simple-select-standard'
        variant='standard'
        name={name}
        className='form-control'
        placeholder={placeholder}
        {...formik.fieldProps}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {selectorData?.map(({ id, label }) => (
          <MenuItem value={label} key={id}>
            <em>{label}</em>
          </MenuItem>
        ))}
      </Select>
      {formik.touched && formik.errors ? (
        <h6>{formik.errors}</h6>
      ) : (
        <h6 style={{ opacity: 0 }}>{"null"}</h6>
      )}
    </div>
  );
};

SelectField.propTypes = {
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  selector: PropTypes.any.isRequired,
  dispatchFunc: PropTypes.func.isRequired,
};

export default SelectField;
