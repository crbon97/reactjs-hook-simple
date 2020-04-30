import React from "react";
import styled from "styled-components";
import { Row, Col, H4, H4SUB } from "../../../UIKIT/Div";

import ic_sv from "../../../assets/images/ic/service.svg";
import saveTalent from "../../../assets/images/ic/ic_recruitS.svg";
import saveTime from "../../../assets/images/ic/ic_jobS.svg";
export default function Service({ ABOUT }) {
  return ABOUT ? (
    <>
      <RowCus>
        <ColCus>
          <img src={saveTime} alt="" />
          <H4Cus>{ABOUT.ABOUT_HEADER3_1 || ""}</H4Cus>
          <H4Description>{ABOUT.ABOUT_SHORTDETAIL3_1 || ""}</H4Description>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={ABOUT.ABOUT_LINK3_1 || "#bob"}
          >
            Read more
          </a>
        </ColCus>
        <ColCus>
          <img src={saveTalent} alt="" />
          <H4Cus>{ABOUT.ABOUT_HEADER3_2 || ""}</H4Cus>
          <H4Description>{ABOUT.ABOUT_SHORTDETAIL3_2 || ""}</H4Description>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={ABOUT.ABOUT_LINK3_2 || "#bob"}
          >
            Read more
          </a>
        </ColCus>
        <ColCus>
          <img src={ic_sv} alt="" />
          <H4Cus>{ABOUT.ABOUT_HEADER3_3 || ""}</H4Cus>
          <H4Description>{ABOUT.ABOUT_SHORTDETAIL3_3 || ""}</H4Description>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={ABOUT.ABOUT_LINK3_3 || "#bob"}
          >
            Read more
          </a>
        </ColCus>
      </RowCus>
    </>
  ) : null;
}
const RowCus = styled(Row)`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`;
const ColCus = styled(Col)`
  align-items: center;
  text-align: center;
  width: 32%;
  a {
    color: #f4c70b;
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline !important;
    margin-top: 8px;
    display: inline-block;
  }
`;
const H4Cus = styled(H4)`
  margin: 16px 0px;
  color: rgba(7, 47, 79, 0.87);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const H4Description = styled(H4SUB)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
