import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import LeftBTN from "../../../assets/images/LeftBTN.svg";
import RightBTN from "../../../assets/images/RightBTN.svg";
import imgDefault from "@iso/assets/images/imgDefault.png";
import { useSelector } from "react-redux";

// import imgtest from "../../../assets/images/imgtest/logocompanies1.png";
export default function SlideTopCompanies() {
  const { listDT } = useSelector(state => state.articleReducer.dataTopHiring);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: listDT && listDT.length <= 4 ? listDT.length : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />
  };
  return (
    <SlideWrapper>
      <Slider {...settings}>
        {listDT &&
          listDT.length > 0 &&
          listDT.map((props, index) => {
            return (
              <IMGSLIDE key={index}>
                <IMG src={props.logo || imgDefault} alt=""></IMG>
              </IMGSLIDE>
            );
          })}
      </Slider>
    </SlideWrapper>
  );
}

const SlideWrapper = styled.div`
  width: 80%;
  margin: 48px auto auto auto;
  .slick-prevz {
    left: -4%;
    top: 44%;
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }
  .slick-nextz {
    right: -2%;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 44%;
  }
`;
const IMGSLIDE = styled.div`
  width: 93% !important;
  text-align: center;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;
const IMG = styled.img`
  width: 168px;
  height: 144px;
  text-align: center;
`;

function LeftNavButton(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-prevz"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={LeftBTN} alt="arrow_left" />
    </div>
  );
}
function RightNavButton(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-nextz"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={RightBTN} alt="arrow_left" />
    </div>
  );
}
