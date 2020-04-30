import React from "react";
import styled from "styled-components";
import imgDefault from "@iso/assets/images/imgDefault.png";
import { H4Cus, H4Description, ReadMorea } from "../../../UIKIT/Common";
import Frame from "@iso/assets/images/Frame.png";
// import jobsearch from "../../../assets/images/imgtest/bg_test.jpg";
JobSearch.defaultProps = {
  bg: null,
  title: "",
  description: "",
  link: "#bob"
};
export default function JobSearch({ bg, title, description, link }) {
  return (
    <JobSearchWP>
      <JL bg={bg || imgDefault}></JL>
      <JR bg={Frame}>
        <H4Cus>{title}</H4Cus>
        <H4DescriptionCUS>{description}</H4DescriptionCUS>
        <ReadMorea target="_blank" href={link}>
          Read more
        </ReadMorea>
      </JR>
    </JobSearchWP>
  );
}
const heightFix = "336px";

const JobSearchWP = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  padding-left: 3%;
  height: ${heightFix};
  align-items: center;
`;

const H4DescriptionCUS = styled(H4Description)`
  margin: 11px 0px 28px 0px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const JL = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-x: right;
  width: 50%;
  height: 100%;
  -webkit-box-shadow: -39px 38px 0px -5px rgba(7, 47, 79, 0.6);
  -moz-box-shadow: -39px 38px 0px -5px rgba(7, 47, 79, 0.6);
  box-shadow: -39px 38px 0px -5px rgba(7, 47, 79, 0.6);
`;

const JR = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 50%;
  padding: 40px;
  height: 90%;
`;
