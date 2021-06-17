import styled from "styled-components";
import { COLOR_PRIMARY,COLOR_BLACK_TEXT_PRIMARY } from "../../colors/Colors";
const InputSearchStyled = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    color: ${COLOR_BLACK_TEXT_PRIMARY};
    font-size: 1em;
    border: 1px solid ${COLOR_PRIMARY};
    border-radius: 10px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size} 0px;
    padding: ${props => props.size};
  `;
  
  export {
    InputSearchStyled
  }