import React from "react";
import { Link } from "react-router-dom";
import Image from "@iso/assets/images/rob.png";
import FourZeroFourStyleWrapper from "./404.styles";
export default function() {
  return (
    <FourZeroFourStyleWrapper className="iso404Page">
      <div className="iso404Content">
        <h1>404</h1>
        <h3>404</h3>
        <p>404</p>

        <Link to="/">
          <button type="button">Quay về</button>
        </Link>
      </div>
      <div className="iso404Artwork">
        <img alt="#" src={Image} />
      </div>
    </FourZeroFourStyleWrapper>
  );
}
