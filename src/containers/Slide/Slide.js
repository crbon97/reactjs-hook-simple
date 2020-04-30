import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import bg_test from "../../assets/images/imgtest/bg_test.jpg";
import bg_test1 from "../../assets/images/imgtest/bg_test1.jpg";
import bg_test2 from "../../assets/images/imgtest/bg_test2.jpg";
import bg_test3 from "../../assets/images/imgtest/bg_test3.jpg";

import LeftBTN from "../../assets/images/LeftBTN.svg";
import RightBTN from "../../assets/images/RightBTN.svg";
import { Line } from "../../UIKIT/Div";
const arrImgSlide = [
  { img: bg_test },
  { img: bg_test1 },
  { img: bg_test2 },
  { img: bg_test3 }
];
export default function Slide() {
  const [percent, setPercent] = useState(0);
  const [count, setCount] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    afterChange: function(index) {
      let i = index + 1;
      let total = arrImgSlide.length;
      let percent = (i * 100) / total;
      setPercent(percent);
      setCount(i);
    },
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />
  };
  return (
    <SlideWrapper>
      <Slider {...settings}>
        {arrImgSlide.map((props, index) => {
          return (
            <SliderIMG key={index} bg={props.img}>
              <ContentRight>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <Count>0{count}/</Count>
                    <Total>0{arrImgSlide.length}</Total>
                  </div>
                  <ProgressBarWP>
                    <BarACtion w={`${percent}%`}></BarACtion>
                  </ProgressBarWP>
                </div>
              </ContentRight>
              <ContentLeft>
                <Box>
                  <h1>PROFESSIONAL RECRUIMENT SERVICES</h1>
                  <LineX></LineX>
                  <p>
                    We expect will research talents who will be a perfect fit in
                    all those aspects
                  </p>
                </Box>
              </ContentLeft>
            </SliderIMG>
          );
        })}
      </Slider>
    </SlideWrapper>
  );
}
const ProgressBarWP = styled.div`
  /* position: absolute; */
  /* left: 10% !important; */
  /* top: 84.5% !important; */
  margin-left: 32px;
  width: 50%;
  background: rgba(255, 253, 242, 0.38);
  border-radius: 4px;
  height: 4px;
  z-index: 999 !important;
  @media screen and (max-width: 1300px) {
    width: 70% !important;
  }
`;
const BarACtion = styled.div`
  width: ${props => props.w};
  height: 100%;
  background-color: #fffdf2;
  border-radius: 4px;
  transition: width 2s;
  z-index: 999 !important;
`;
const LineX = styled(Line)`
  margin: 16px 0px;
`;
const Count = styled.span`
  color: #fffdf2;
  font-size: 21px;
  font-weight: 400;
`;
const Total = styled.span`
  color: rgba(255, 253, 242, 0.38);
  font-weight: 400;
  font-size: 19px;
`;
const SliderIMG = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  height: 616px;
  margin: 0 auto;
  display: flex !important;
`;
const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  height: 100%;
`;
const Box = styled.div`
  width: 75%;
  h1 {
    font-weight: bold;
    font-size: 48px;
    color: #fffdf2;
  }
  p {
    font-size: 18px;
    color: rgba(255, 253, 242, 0.6);
  }
`;
const ContentRight = styled.div`
  width: 50%;
  padding: 58px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const SlideWrapper = styled.div`
  width: 100%;
  .slick-prevz {
    left: 42% !important;
    top: 84.5% !important;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    @media screen and (max-width: 1300px) {
      left: 51% !important;
    }
  }
  .slick-nextz {
    right: 52% !important;
    position: absolute;
    top: 84.5% !important;
    z-index: 1;
    cursor: pointer;
    @media screen and (max-width: 1300px) {
      right: 43% !important;
    }
  }
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
