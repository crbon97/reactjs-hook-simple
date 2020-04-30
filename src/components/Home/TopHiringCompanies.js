import React from "react";
// import styled from "styled-components";
import { Title, Description, CusLine } from "../../UIKIT/Common";
import SlideTopCompanies from "../UI/TopCompanies/SlideTopCompanies";


export default function TopHiringCompanies() {
  return (
    <>
      <Title>Top 10 Hiring Companies</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CusLine></CusLine>
      </div>
      <Description>Over 10 Thousand Jobs</Description>
      <SlideTopCompanies></SlideTopCompanies>
    </>
  );
}

// const OURSERVICE = styled.div`
//   margin-top: 72px;
// `;
