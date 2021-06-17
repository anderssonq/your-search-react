import styled from "styled-components";
import { COLOR_PRIMARY } from "../../colors/Colors";
const HeaderStyled = styled.div`
  background-color: ${COLOR_PRIMARY};
  width: 100%;
  height: 10vh;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export { HeaderStyled };
