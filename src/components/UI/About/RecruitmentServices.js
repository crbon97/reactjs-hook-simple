import React from "react";
import styled from "styled-components";
import { H4Description } from "../../../UIKIT/Common";
import imgDefault from "@iso/assets/images/imgDefault.png";
export default function RecruitmentServices({ ABOUT }) {
  return (
    <RecruitmentServicesWP>
      <JL>
        <JLCONTENT>
          <H4DescriptionCUS  dangerouslySetInnerHTML={{
            __html: ABOUT.ABOUT_DETAIL1
              ? ABOUT.ABOUT_DETAIL1.replace(/(?:\r\n|\r|\n)/g, "<br />")
              : ""
          }}></H4DescriptionCUS>
        </JLCONTENT>
      </JL>
      <JR>
        <FixLayer>
          <LayerBlue></LayerBlue>
          <LayerYellow></LayerYellow>
          <IMG src={ABOUT.ABOUT_IMG1 || imgDefault} alt=""></IMG>
        </FixLayer>
      </JR>
    </RecruitmentServicesWP>
  );
}

const RecruitmentServicesWP = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

const H4DescriptionCUS = styled(H4Description)`
  margin: 11px 0px 28px 0px;
`;
const LayerBlue = styled.div`
  height: 100%;
  width: 73%;
  position: absolute;
  top: -25px;
  left: 35%;
  background: rgba(7, 47, 79, 0.6);
  z-index: 5;
`;
const LayerYellow = styled.div`
  height: 100%;
  width: 71%;
  position: absolute;
  top: 28px;
  left: 33%;
  background: rgba(244, 199, 11, 0.38);
  z-index: 6;
`;
const FixLayer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const IMG = styled.img`
  width: 100%;
  position: absolute;
  height: 336px;
  z-index: 10;
`;
const JR = styled.div`
  position: absolute;
  right: 4%;
  top: 6%;
  width: 576px;
  height: 336px;
  @media screen and (max-width: 1280px) {
    position: absolute;
    right: -3%;
    width: 540px;
    height: 301px;
  }
`;

const JL = styled.div`
  width: 70%;
  padding: 40px;
  height: 90%;
  background: rgba(7, 47, 79, 0.08);
`;
const JLCONTENT = styled.div`
  width: 60%;
`;
