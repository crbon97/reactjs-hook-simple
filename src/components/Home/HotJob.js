import React, { useEffect } from "react";
// import styled from "styled-components";
import { Title, Description, CusLine } from "../../UIKIT/Common";
import SlideHotJob from "../UI/HotJob/SlideHotJob";
import { useDispatch, useSelector } from "react-redux";
import recruitmentAction from "@iso/redux/Recruitment/actions";
const { getDataRecruitment } = recruitmentAction;
export default function HotJob({ title }) {
  const { list } = useSelector(
    state => state.recruitmentReducer.dataRecruitment
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getListBlog();
  }, []);
  function getListBlog() {
    let model = {
      page: 1,
      search: "",
      orderBy: ""
    };
    dispatch(getDataRecruitment(model));
  }
  return (
    <>
      <Title>{title}</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CusLine></CusLine>
      </div>
      <Description>Here the jobs are waiting for you</Description>
      <SlideHotJob list={list}></SlideHotJob>
    </>
  );
}

// const OURSERVICE = styled.div`
//   margin-top: 72px;
// `;
