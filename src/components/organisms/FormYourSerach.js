import React, { useState } from "react";
import styled from "styled-components";
import InputSearchLabel from "../molecules/InputSearchLabel";
import SelectSearchLabel from "../molecules/SelectSearchLabel";
import { CardFormSearch } from "../templates/CardFormSearch";
import BtnSearch from "../atoms/BtnSearch";

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BtnsControl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const optionsSelect = [
  { text: "5 Results", value: 5 },
  { text: "10 Results", value: 10 },
  { text: "15 Results", value: 15 },
  { text: "I don't know", value: 99999 },
];

const FormYourSerach = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [resultValue, setResultValue] = useState(0);

  const handlerNameSearch = (event) => {
    const { value } = event.target;
    setNameSearch(value);
  };

  const handlerResultValue = (event) => {
    const { value } = event.target;
    setResultValue(value);
  };

  const handlerSubmit = () => {
    console.log(">");
    if (nameSearch && resultValue) {
      console.log(nameSearch, resultValue);

      setNameSearch('')
      setResultValue(5)
    }
  };

  return (
    <CardFormSearch>
      <FormStyled onSubmit={handlerSubmit}>
        <InputSearchLabel
          label="What are you looking for?"
          placeholder="Type something..."
          onChange={handlerNameSearch}
          value={nameSearch}
        />
        <SelectSearchLabel
          label="What are you looking for?"
          placeholder="Type something..."
          items={optionsSelect}
          onChange={handlerResultValue}
          value={resultValue}
        />
      </FormStyled>
      <BtnsControl>
        <BtnSearch text={`Search!`} onClick={handlerSubmit} />
        <BtnSearch text={`Clean search!`} />
      </BtnsControl>
    </CardFormSearch>
  );
};

export default FormYourSerach;
