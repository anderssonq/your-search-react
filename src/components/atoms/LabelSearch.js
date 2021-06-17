import React from "react";
import PropTypes from "prop-types";

const LabelSearch = ({ labelText, forName }) => {
  return <label htmlFor={forName}>{labelText}</label>;
};

LabelSearch.propTypes = {
  labelText: PropTypes.string.isRequired,
  forName: PropTypes.string.isRequired,
};

export default LabelSearch;
