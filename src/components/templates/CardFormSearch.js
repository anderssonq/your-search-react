import styled from "styled-components";
import { COLOR_GRAY } from "../../colors/Colors";

const CardFormSearch = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 200px;
    background: ${COLOR_GRAY};
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding: 20px;
    margin: 20px;
`

export {
    CardFormSearch
}

