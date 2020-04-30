import React from "react";
import * as SC from "./Nav.styles";
import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;
export default function Nav() {
  return (
    <SC.NavWrapper>
      <SC.Content>
        <nav>
          <ul>
            <li className="active">
              <SC.NavLink to="/">1</SC.NavLink>
            </li>
            <li>
              <SC.NavLink to="/service">2</SC.NavLink>
            </li>
            <li>
              <SC.NavLink to="/blog">3</SC.NavLink>
            </li>
            <li>
              <SC.NavLink to="/contact">4</SC.NavLink>
            </li>
            <li>
              <SC.NavLink to="/about">5</SC.NavLink>
            </li>
          </ul>
        </nav>
        <CustomSearch>
          <Search
            placeholder="Search..."
            onSearch={value => console.log(value)}
            style={{ width: 340, height: 40 }}
          />
        </CustomSearch>
      </SC.Content>
    </SC.NavWrapper>
  );
}
const CustomSearch = styled.span`
  .ant-input-search {
    .ant-input:focus {
      box-shadow: initial !important;
    }
    .ant-input-suffix {
      i.anticon {
        font-size: 22px;
        color: #072f4f;
      }
    }
  }
`;
