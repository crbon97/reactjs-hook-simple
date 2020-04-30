import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { DashboardContainer, DashboardGlobalStyles } from "./Layout.styles";

import Header from "./../Header/Header";
import Nav from "./../Nav/Nav";
// import Slide from "@iso/containers/Slide/Slide";

import { publicRoutes } from "../../router";

import { BackTop } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import articleAction from "@iso/redux/Article/actions";
import commonAction from "@iso/redux/Common/actions";
const {
  getDataArticleBlog,
} = articleAction;
const {
  getTitleList,
} = commonAction;

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTitleList());
    getListBlog();

    //recent fixed
  }, []);

  function getListBlog() {
    let model = {
      page: 1,
      limit: 4
    };
    dispatch(getDataArticleBlog(model));
  }
  return (
    <DashboardContainer>
      <WP>
        <BackTop>
          <div className="ant-back-top-inner">
            <span className="scroll-up">
              <span className="left-bar"></span>
              <span className="right-bar"></span>
              <svg width="40" height="40">
                <line className="top" x1="0" y1="0" x2="120" y2="0" />
                <line className="left" x1="0" y1="40" x2="0" y2="-80" />
                <line className="bottom" x1="40" y1="40" x2="-80" y2="40" />
                <line className="right" x1="40" y1="0" x2="40" y2="1200" />
              </svg>
            </span>
          </div>
        </BackTop>
      </WP>
      <DashboardGlobalStyles />
      <Router>
        <Header />
        <Nav />
        {/* <Slide /> */}
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={({ match }) => <route.component match={match} />}
            />
          ))}
        </Switch>
      </Router>
    </DashboardContainer>
  );
}
const WP = styled.div`
  .ant-back-top {
    bottom: 20px;
    right: 2%;
  }

  .scroll-up {
    height: 40px;
    width: 40px;
    display: block;
    outline: 1px solid rgba(666, 666, 666, 0.08);
    position: relative;
    cursor: pointer;
    svg line {
      stroke-width: 1;
      stroke: #aaa;
      fill: none;
      stroke-dasharray: 20;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }
    &:hover svg line {
      &.top {
        -webkit-transform: translateX(-40px);
        transform: translateX(-40px);
      }
      &.bottom {
        -webkit-transform: translateX(40px);
        transform: translateX(40px);
      }
      &.left {
        -webkit-transform: translateY(40px);
        transform: translateY(40px);
      }
      &.right {
        -webkit-transform: translateY(-40px);
        transform: translateY(-40px);
      }
    }
  }

  .scroll-up {
    .left-bar {
      position: absolute;
      z-index: 1;
      background-color: transparent;
      top: 19px;
      left: 5px;
      width: 18px;
      display: block;
      transform: rotate(-45deg);
      &:after {
        content: "";
        background-color: #666;
        width: 18px;
        height: 1px;
        display: block;
        border-radius: 1px;
        transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
        transform-origin: right center;
        z-index: -1;
      }
    }
    .right-bar {
      position: absolute;
      z-index: 1;
      background-color: transparent;
      top: 19px;
      left: 17px;
      width: 18px;
      display: block;
      transform: rotate(45deg);
      border-radius: 2px;
      &:after {
        content: "";
        background-color: #666;
        width: 18px;
        height: 1px;
        display: block;
        border-radius: 1px;
        transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
        transform-origin: left center;
        z-index: -1;
      }
    }
    &:hover {
      transition: all 0.1s;
      .left-bar:after {
        transform: rotate(-10deg);
      }
      .right-bar:after {
        transform: rotate(10deg);
      }
    }
  }
`;
