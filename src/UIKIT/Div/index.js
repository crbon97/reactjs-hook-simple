import styled from "styled-components";
import { COLOR_BLACK, COLOR_YELLOW } from "../../UIKIT/Variables";

const H1 = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: ${COLOR_BLACK};
`;
const H1SUB = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: rgba(7, 47, 79, 0.87);
  text-align: center;
`;
const H2 = styled.h2`
  font-weight: bold;
  font-size: 40px;
  color: ${COLOR_BLACK};
`;
const H3 = styled.h3`
  font-weight: 600;
  font-size: 32px;
  color: ${COLOR_BLACK};
`;
const H4 = styled.h4`
  font-weight: bold;
  font-size: 24px;
  color: ${COLOR_BLACK};
`;
const H4SUB = styled.h4`
  font-weight: normal;
  font-size: 16px;
  color: rgba(7, 47, 79, 0.6);
`;
const TextNomal = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: ${COLOR_YELLOW};
`;
const TextSM = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: ${COLOR_YELLOW};
`;

const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  background: ${COLOR_YELLOW};
  width: 48px;
  height: 2px;
`;

export { H1, H2, H3, H4, H1SUB, H4SUB, TextNomal, Row, TextSM, Col ,Line};

// WEBPACK FOOTER //
// ./src/components/UIKit/Button/index.js
