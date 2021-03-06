import React from "react";
import PropTypes from "prop-types";

const TextGroup = ({ label, value }) => {
  return (
    <div className='group-text-container'>
      <h5>{label}</h5>
      <p>{value}</p>
    </div>
  );
};

TextGroup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string.isRequired,
};
export default React.memo(TextGroup);
