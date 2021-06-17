import React from "react";
import PropTypes from "prop-types";
import { BtnSearchStyled } from "../templates/BtnSearchStyled";

const BtnSearch = ({ text, ...rest }) => {
  return <BtnSearchStyled {...rest}>{text}</BtnSearchStyled>;
};

BtnSearch.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnSearch;
