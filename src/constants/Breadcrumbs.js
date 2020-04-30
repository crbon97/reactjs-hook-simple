import React from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import DetailBreadcrumb from "../components/DetailBreadcrumb";
import DetailBreadcrumbRecruitment from "../components/DetailBreadcrumbRecruitment";
import styled from "styled-components";
import { Breadcrumb } from "antd";

var indexRoutes = [
  {
    path: "/home",
    breadcrumb: "Home"
  },
  {
    path: "/service",
    breadcrumb: "Service"
  },
  {
    path: "/recruitment",
    breadcrumb: "Recruitment"
  },
  {
    path: "/recruitment/:id",
    breadcrumb: DetailBreadcrumbRecruitment
  },
  {
    path: "/blog",
    breadcrumb: "Blog"
  },
  {
    path: "/blog/:id",
    breadcrumb: DetailBreadcrumb
  },
  {
    path: "/contact",
    breadcrumb: "Contact"
  }
];
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <Content>
      <Breadcrumb separator=">">
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <Breadcrumb.Item
            key={match.url}
            className={index === 0 ? "active" : ""}
            href={match.url}
          >
            {breadcrumb}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Content>
  );
};
export default withBreadcrumbs(indexRoutes)(Breadcrumbs);
const Content = styled.div`
  .ant-breadcrumb {
    a {
      color: #072f4f;
      font-weight: normal;
      font-size: 14px;
    }
    a.active {
      color: #072f4f;
    }
  }
`;
