import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import LeftBTN from "../../../assets/images/LeftBTN.svg";
import RightBTN from "../../../assets/images/RightBTN.svg";
import imgDefault from "@iso/assets/images/imgDefault.png";

// import imgtest from "../../../assets/images/imgtest/bg_test.jpg";
// import imgtest2 from "../../../assets/images/imgtest/bg_test2.jpg";
// import imgtest3 from "../../../assets/images/imgtest/bg_test3.jpg";
export default function SlideHotJob({ list }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: list&&list.length <= 4 ? list.length : 4,
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
        {list &&
          list.length > 0 &&
          list.map((prop, index) => {
            return (
              <IMGSLIDE key={index}>
                <IMG src={prop.thumbnail || imgDefault} alt=""></IMG>
                <Layer>
                  <Link to={"/recruitment/" + prop.id || ""}>
                    {prop.title || ""}
                  </Link>
                  <p>
                    {(prop.address &&
                      prop.address[0] &&
                      prop.address[0].city) ||
                      ""}
                  </p>
                </Layer>
              </IMGSLIDE>
            );
          })}
      </Slider>
    </SlideWrapper>
  );
}

const SlideWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
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
  position: relative;
  text-align: center;
  /* display:flex!important; */
  justify-content: center;
  align-items: center;
`;
const Layer = styled.div`
  position: absolute;
  bottom: 0%;
  background-color: gray;
  width: 100%;
  background: rgba(7, 47, 79, 0.8);
  text-align: center;
  padding: 16px 0px;
  a {
    color: rgba(244, 199, 11, 0.87);
    font-weight: bold;
    font-size: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    font-weight: normal;
    font-size: 14px;
    color: rgba(255, 253, 242, 0.6);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const IMG = styled.img`
  width: 100%;
  height: 267px;
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
