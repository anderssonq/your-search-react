import React, { memo } from "react";
import { HeaderStyled } from "../templates/HeaderStyled";
const HeaderApp = (props) => {
  return <HeaderStyled>
      
      <div className="logo_wrapper">
          Your Search.com
      </div>
      <div className="author">
          by Andersson Quintero
      </div>
  </HeaderStyled>;
};

export default memo(HeaderApp);
