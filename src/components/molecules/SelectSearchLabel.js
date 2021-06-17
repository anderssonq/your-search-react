import React from "react";
import SelectSearch from "../atoms/SelectSearch";
import LabelSearch from "../atoms/LabelSearch";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const SelectSearchLabel = ({ label, ...rest }) => {
  return (
    <InputLayout>
      <LabelSearch forName="resultSearch" labelText={label} />
      <SelectSearch {...rest} name="resultSearch" />
    </InputLayout>
  );
};

SelectSearchLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SelectSearchLabel;
