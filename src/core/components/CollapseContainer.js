import React from "react";
import "./collapseContainer.scss";
import PropTypes from "prop-types";

const CollapseContainer = ({ children }) => {
  return <div className='collapse-container'>{children}</div>;
};

CollapseContainer.propTypes = {
  children: PropTypes.any,
};

export default React.memo(CollapseContainer);
