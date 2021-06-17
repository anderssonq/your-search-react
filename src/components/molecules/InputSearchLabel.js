import React from "react";
import InputSearch from "../atoms/InputSearch";
import LabelSearch from "../atoms/LabelSearch";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const InputSearchLabel = ({ label, ...rest }) => {
  return (
    <InputLayout>
      <LabelSearch forName="nameSearch" labelText={label} />
      <InputSearch {...rest} name="nameSearch" />
    </InputLayout>
  );
};

InputSearchLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
export default InputSearchLabel;
