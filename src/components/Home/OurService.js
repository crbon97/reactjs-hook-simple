import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title, Description, CusLine } from "../../UIKIT/Common";
import JobSearch from "../UI/OurService/JobSearch";
import RecruitmentServices from "../UI/OurService/RecruitmentServices";
import ExecutiveSearch from "../UI/OurService/ExecutiveSearch";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function OurService() {
  const location = useLocation();
  const [path, setPath] = useState("");
  const { HOMETOP, SERVICE } = useSelector(
    state => state.commonReducer.dataPage
  );
  useEffect(() => {
    setPath(location.pathname);
  }, []);
  return HOMETOP && SERVICE ? (
    <>
      <Title>
        {path === "/"
          ? HOMETOP.HOMETOP_HEADER2
          : path === "/service"
          ? SERVICE.SERVICE_HEADER1
          : ""}
      </Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CusLine></CusLine>
      </div>
      <Description>
        {path === "/"
          ? HOMETOP.HOMETOP_SHORTDETAIL1
          : path === "/service"
          ? SERVICE.SERVICE_SHORTDETAIL1
          : ""}
      </Description>
      {
        <JobSearch
          title={
            path === "/"
              ? HOMETOP.HOMETOP_TITLE2_1
              : path === "/service"
              ? SERVICE.SERVICE_TITLE1_1
              : ""
          }
          description={
            path === "/"
              ? HOMETOP.HOMETOP_DETAIL2_1
              : path === "/service"
              ? SERVICE.SERVICE_DETAIL1_1
              : ""
          }
          link={
            path === "/"
              ? HOMETOP.HOMETOP_LINK2_1
              : path === "/service"
              ? SERVICE.SERVICE_LINK1_1
              : ""
          }
          bg={
            path === "/"
              ? HOMETOP.HOMETOP_IMG2_1
              : path === "/service"
              ? SERVICE.SERVICE_IMG1_1
              : ""
          }
        ></JobSearch>
      }
      {
        <RecruitmentServices
          title={
            path === "/"
              ? HOMETOP.HOMETOP_TITLE2_2
              : path === "/service"
              ? SERVICE.SERVICE_TITLE1_2
              : ""
          }
          description={
            path === "/"
              ? HOMETOP.HOMETOP_DETAIL2_2
              : path === "/service"
              ? SERVICE.SERVICE_DETAIL1_2
              : ""
          }
          link={
            path === "/"
              ? HOMETOP.HOMETOP_LINK2_2
              : path === "/service"
              ? SERVICE.SERVICE_LINK1_2
              : ""
          }
          bg={
            path === "/"
              ? HOMETOP.HOMETOP_IMG2_2
              : path === "/service"
              ? SERVICE.SERVICE_IMG1_2
              : ""
          }
        ></RecruitmentServices>
      }
      {
        <ExecutiveSearch
          title={
            path === "/"
              ? HOMETOP.HOMETOP_TITLE2_3
              : path === "/service"
              ? SERVICE.SERVICE_TITLE1_3
              : ""
          }
          description={
            path === "/"
              ? HOMETOP.HOMETOP_DETAIL2_3
              : path === "/service"
              ? SERVICE.SERVICE_DETAIL1_3
              : ""
          }
          link={
            path === "/"
              ? HOMETOP.HOMETOP_LINK2_3
              : path === "/service"
              ? SERVICE.SERVICE_LINK1_3
              : ""
          }
          bg={
            path === "/"
              ? HOMETOP.HOMETOP_IMG2_3
              : path === "/service"
              ? SERVICE.SERVICE_IMG1_3
              : ""
          }
        ></ExecutiveSearch>
      }
    </>
  ) : (
    <NODATA>No Data</NODATA>
  );
}

const NODATA = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 200px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  color: rgb(173, 173, 173);
  font-style: italic;
  font-weight: 300;
`;
