import React from "react";
import styled from "styled-components";
// import jobsearch from "../../../assets/images/imgtest/bg_test.jpg";
export default function WhatWeDo({ ABOUT }) {
  console.log(ABOUT.ABOUT_DETAIL2);
  console.log(ABOUT);

  return (
    <WWD>
      <JR bg={ABOUT.ABOUT_IMG2 || ""}></JR>
      <JL>
        <h1>{ABOUT.ABOUT_HEADER2 || ""}</h1>
        <Line></Line>
        <div className="sub">{ABOUT.ABOUT_SHORTDETAIL2 || ""}</div>
        <p
          dangerouslySetInnerHTML={{
            __html: ABOUT.ABOUT_DETAIL2
              ? ABOUT.ABOUT_DETAIL2.replace(/(?:\r\n|\r|\n)/g, "<br />")
              : ""
          }}
        ></p>
      </JL>
    </WWD>
  );
}

const WWD = styled.div`
  margin-top: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  background: #f4c70b;
  width: 55px;
  height: 4px;
  margin: 8px 0px;
`;

const JR = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 448px;
  width: 48%;
`;

const JL = styled.div`
  width: 50%;
  padding: 40px;
  height: 90%;
  h1 {
    font-weight: bold;
    font-size: 40px;
    color: #072f4f;
  }
  .sub {
    color: rgba(7, 47, 79, 0.87);
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 32px;
  }
  p {
    color: rgba(7, 47, 79, 0.6);
    font-weight: 500;
    font-size: 18px;
  }
`;
