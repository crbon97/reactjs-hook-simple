import React from "react";
import styled from "styled-components";
import { H4Cus, H4Description, ReadMorea } from "../../../UIKIT/Common";
import Frame2 from "@iso/assets/images/Frame2.png";
import imgDefault from "@iso/assets/images/imgDefault.png";
RecruitmentServices.defaultProps = {
  bg: null,
  title: "",
  description: "",
  link: "#bob"
};
export default function RecruitmentServices({ bg, title, description, link }) {
  return (
    <RecruitmentServicesWP>
      <JL bg={Frame2}>
        <JLCONTENT>
          <H4Cus>{title}</H4Cus>
          <H4DescriptionCUS>{description}</H4DescriptionCUS>
          <ReadMorea target="_blank" href={link}>
            Read more
          </ReadMorea>
        </JLCONTENT>
      </JL>
      <JR>
        <FixLayer>
          <LayerBlue></LayerBlue>
          <LayerYellow></LayerYellow>
          <IMG src={bg || imgDefault} alt=""></IMG>
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  @media only screen and (max-width: 1280px) {
    width: 90%;
    height: 94%;
  }
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
  @media only screen and (max-width: 1280px) {
    right: -4%;
  }
`;

const JL = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 70%;
  padding: 40px;
  height: 90%;
`;
const JLCONTENT = styled.div`
  width: 50%;
`;
