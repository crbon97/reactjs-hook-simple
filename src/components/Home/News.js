import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Description, CusLine, ReadMore } from "../../UIKIT/Common";
import {  H4SUB } from "../../UIKIT/Div";
// import articleAction from "@iso/redux/Article/actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imgDefault from "@iso/assets/images/imgDefault.png";
// const { getDataArticleBlog } = articleAction;
export default function News() {
  const { list } = useSelector(state => state.articleReducer.dataArticleBlog);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getListBlog();
  // }, []);

  // function getListBlog() {
  //   let model = {
  //     page: 1,
  //     limit: 4
  //   };
  //   dispatch(getDataArticleBlog(model));
  // }
  return (
    <>
      <Title>News</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CusLine></CusLine>
      </div>
      <Description>Recruitment Development & Learning</Description>
      <NEWSLISTS>
        {list &&
          list.length > 0 &&
          list.map((prop, index) => {
            if (index > 2) return true;
            return (
              <ITEM key={index}>
                <IMG src={prop.thumbnail || imgDefault} alt=""></IMG>
                <TitleItem to={"/blog/" + prop.id} alt="">
                  {prop.title || ""}
                </TitleItem>
                <Desciption>{prop.shortDescriptions || ""}</Desciption>
              </ITEM>
            );
          })}
      </NEWSLISTS>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}
      >
        <ReadMore to={"/blog"}>Read more</ReadMore>
      </div>
    </>
  );
}

const NEWSLISTS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
`;

const ITEM = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const IMG = styled.img`
  width: 100%;
  height: 267px;
`;
const TitleItem = styled(Link)`
  margin: 16px 0px;
  color: rgba(7, 47, 79, 0.87);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: bold;
  font-size: 24px;
  color: 000000;
`;
const Desciption = styled(H4SUB)`
  color: rgba(7, 47, 79, 0.6);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
