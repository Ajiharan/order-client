import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useReduxService from "../util/services/useReduxService";
import PropTypes from "prop-types";

const AutoCompleteField = ({
  formik,
  name,
  placeholder,
  baseUrl = "https://api.geoapify.com/v1/geocode/search",
  selector,
  dispatchFunc,
  params,
  onEventUpdate,
}) => {
  const { selectorData } = useReduxService(
    baseUrl,
    selector,
    dispatchFunc,
    params?.text,
    true,
    params
  );

  const handleChange = (_, location) => {
    onEventUpdate(location);
  };

  return (
    <div>
      <Autocomplete
        id='combo-box-demo'
        options={selectorData}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            {...formik.fieldProps}
            name={name}
            variant='standard'
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

AutoCompleteField.propTypes = {
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  selector: PropTypes.any.isRequired,
  dispatchFunc: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  onEventUpdate: PropTypes.func.isRequired,
};

export default AutoCompleteField;