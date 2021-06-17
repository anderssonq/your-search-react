import styled from "styled-components";
import { COLOR_PRIMARY } from '../../colors/Colors'

const BtnSearchStyled = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1.1em;
  margin: 1em;
  padding: 1em 2em;
  border: 2px solid ${COLOR_PRIMARY};
  border-radius: 3px;
  display: block;
  cursor: pointer;
`;

export {
  BtnSearchStyled
}