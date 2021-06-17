import React from "react";
import PropTypes from "prop-types";
import { SelectSearchStyled } from "../templates/SelectSearchStyled";

const SelectSearch = ({ items, ...rest }) => {
  return <SelectSearchStyled {...rest}> 
    {items.map((i) => <option key={i.value} value={i.value}>{i.text}</option>)}
  </ SelectSearchStyled>;
};

SelectSearch.propTypes = {
    items: PropTypes.array.isRequired,
};

export default SelectSearch;
