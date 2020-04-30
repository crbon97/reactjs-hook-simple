import styled from "styled-components";
import { H2, H1SUB, Line, Row, Col, H4, H4SUB } from "../../UIKIT/Div";
import { Link } from "react-router-dom";
import { BG_BLUE, COLOR_YELLOW } from "../Variables";
const Title = styled(H2)`
  width: 100%;
  text-align: center;
  color: rgba(7, 47, 79, 0.87);
`;
const Description = styled(H1SUB)`
  text-align: center;
  color: rgba(7, 47, 79, 0.87);
`;
const CusLine = styled(Line)`
  text-align: center;
  height: 4px;
  margin: 8px 0px;
`;
const RowCus = styled(Row)``;
const ColCus = styled(Col)`
  align-items: center;
  text-align: center;
`;
const H4Cus = styled(H4)`
  color: rgba(7, 47, 79, 0.87);
`;
const H4Description = styled(H4SUB)``;
const ReadMore = styled(Link)`
  color: ${BG_BLUE};
  font-weight: 500;
  font-size: 16px;
  background-color: ${COLOR_YELLOW};
  border-radius: 4px;
  padding: 11px 32px;
  display: inline-block;
  &:hover {
    color: initial;
  }
`;
const ReadMorea = styled.a`
  color: ${BG_BLUE};
  font-weight: 500;
  font-size: 16px;
  background-color: ${COLOR_YELLOW};
  border-radius: 4px;
  padding: 11px 32px;
  display: inline-block;
  &:hover {
    color: initial!important;
  }
`;
export {
  Title,
  Description,
  CusLine,
  RowCus,
  ColCus,
  H4Cus,
  H4Description,
  ReadMore,
  ReadMorea
};
