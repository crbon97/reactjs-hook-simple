import styled from "styled-components";
import { BG_BLUE, COLOR_YELLOW } from "../../UIKIT/Variables";
// import * as DIV from "../../UIKIT/Div";

import { Link } from "react-router-dom";
const NavWrapper = styled.div``;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    ul {
      margin: 0px;
      padding: 0px;
      display: flex;
      li {
        padding: 28px;
      }
      li.active {
        border-bottom: ${COLOR_YELLOW} solid 4px;
        a {
          color: ${BG_BLUE};
        }
      }
    }
  }
`;
const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  color: rgba(7, 47, 79, 0.6);
  text-decoration: none;
`;
export { NavWrapper, Content, NavLink };
