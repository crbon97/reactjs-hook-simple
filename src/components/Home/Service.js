import React from "react";
import styled from "styled-components";
import { H2, H1SUB, Line, Row, Col, H4, H4SUB } from "../../UIKIT/Div";
import { useSelector } from "react-redux";
import ic_sv from "../../assets/images/ic/service.svg";
import saveTalent from "../../assets/images/ic/saveTalent.svg";
import saveTime from "../../assets/images/ic/saveTime.svg";
export default function Service() {
  const { HOMETOP } = useSelector(state => state.commonReducer.dataPage);
  return HOMETOP ? (
    <React.Fragment>
      <Title>{HOMETOP.HOMETOP_HEADER1 || ""}</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CusLine></CusLine>
      </div>
      <Description>{HOMETOP.HOMETOP_SHORTDETAIL1 || ""}</Description>
      <RowCus>
        <ColCus>
          <img src={ic_sv} alt="" />
          <H4Cus> {HOMETOP.HOMETOP_TITLE1_1 || ""}</H4Cus>
          <H4Description>{HOMETOP.HOMETOP_DETAIL1_1 || ""}</H4Description>
        </ColCus>
        <ColCus>
          <img src={saveTime} alt="" />
          <H4Cus> {HOMETOP.HOMETOP_TITLE1_2 || ""}</H4Cus>
          <H4Description>{HOMETOP.HOMETOP_DETAIL1_2 || ""}</H4Description>
        </ColCus>
        <ColCus>
          <img src={saveTalent} alt="" />
          <H4Cus> {HOMETOP.HOMETOP_TITLE1_3 || ""}</H4Cus>
          <H4Description>{HOMETOP.HOMETOP_DETAIL1_3 || ""}</H4Description>
        </ColCus>
      </RowCus>
    </React.Fragment>
  ) : null;
}
const Title = styled(H2)`
  width: 100%;
  text-align: center;
  color: rgba(7, 47, 79, 0.87);
`;
const Description = styled(H1SUB)`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  color: rgba(7, 47, 79, 0.87);
`;
const CusLine = styled(Line)`
  text-align: center;
  height: 4px;
  margin: 8px 0px;
`;
const RowCus = styled(Row)`
  margin-top: 48px;
  justify-content: space-between;
`;
const ColCus = styled(Col)`
  align-items: center;
  width: 32%;
  text-align: center;
`;
const H4Cus = styled(H4)`
  margin: 16px 0px;
  color: rgba(7, 47, 79, 0.87);
`;
const H4Description = styled(H4SUB)``;
