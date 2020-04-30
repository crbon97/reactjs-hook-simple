import styled from "styled-components";
import { BG_BLUE, COLOR_YELLOW } from "../../UIKIT/Variables";
import * as DIV from "../../UIKIT/Div";
const Header = styled.div`
  background-color: ${BG_BLUE};
  align-items: center;
  width: 100%;
  color: rgba(255, 245, 241, 0.82);
  padding: 19px 0px;
  .header-box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .header-title {
    display: flex;
    align-items: center;
  }
  .header-contact {
    display: flex;
    align-items: center;
    img {
      margin-right: 12px;
    }
  }
`;
const BOXCOLOR = styled.div`
  background-color: ${COLOR_YELLOW};
  width: 64px;
  height: 52px;
  border-radius: 100px;
  margin-right: 12px;
`;
const TITLEH = styled(DIV.TextNomal)`
  margin-bottom: 5px;
`;
const TITLESUB = styled(DIV.TextSM)`
  font-weight: 300;
  letter-spacing: 3px;
`;
const COL = styled(DIV.Col)`
  text-align: center;
`;
const RowCT = styled(DIV.Row)`
  margin-right: 57px;
  &:last-child{
      margin-right:0px;
  }
`;
const COLCT = styled(DIV.Col)``;
const TXTHOTLINE = styled(DIV.TextSM)`
  font-weight: normal;
  margin-bottom: 5px;
`;
const TITLEHOTLINESUB = styled(DIV.TextSM)`
  font-weight: bold;
  font-size: 18px;
  color: rgba(255, 245, 241, 0.82);
`;
export {
  Header,
  BOXCOLOR,
  TITLEH,
  TITLESUB,
  COL,
  RowCT,
  COLCT,
  TXTHOTLINE,
  TITLEHOTLINESUB
};
