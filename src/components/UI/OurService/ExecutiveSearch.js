import React from "react";
import styled from "styled-components";
import { H4Cus, H4Description, ReadMorea } from "../../../UIKIT/Common";
import Frame3 from "@iso/assets/images/Frame3.png";
import imgDefault from "@iso/assets/images/imgDefault.png";
ExecutiveSearch.defaultProps = {
  bg: null,
  title: "",
  description: "",
  link: "#bob"
};
export default function ExecutiveSearch({ bg, title, description, link }) {
  return (
    <ExecutiveWP>
      <JL bg={Frame3}>
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
    </ExecutiveWP>
  );
}

const ExecutiveWP = styled.div`
  margin-top: 18%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
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
  width: 99%;
  position: absolute;
  top: 23px;
  left: -5%;
  background: rgba(7, 47, 79, 0.6);
  z-index: 5;
`;
const LayerYellow = styled.div`
  height: 419px;
  width: 32%;
  position: absolute;
  top: -42px;
  left: 78%;
  background: rgba(244, 199, 11, 0.6);
  z-index: 6;
  @media screen and (max-width: 1280px) {
    height: 387px;
    top: -28px;
  }
`;
const FixLayer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1280px) {
    width: 92%;
  }
`;
const IMG = styled.img`
  width: 100%;
  position: absolute;
  height: 336px;
  z-index: 10;
  @media screen and (max-width: 1280px) {
    height: 320px;
  }
`;
const JR = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 576px;
  height: 336px;
  @media screen and (max-width: 1280px) {
    left: 0%;
    width: 500px;
    height: 308px;
  }
`;

const JL = styled.div`
  width: 65%;
  padding: 40px;
  height: 90%;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const JLCONTENT = styled.div`
  width: 89%;
  padding-left: 33%;
  @media only screen and (max-width: 1300px) {
    width: 95%;
    padding-left: 45%;
  }
`;
