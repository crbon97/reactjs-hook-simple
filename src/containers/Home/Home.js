import React, { useEffect } from "react";
import styled from "styled-components";
import Service from "@iso/components/Home/Service";
import OurService from "@iso/components/Home/OurService";
import News from "@iso/components/Home/News";
import TopHiringCompanies from "@iso/components/Home/TopHiringCompanies";
import { ReadMore } from "../../UIKIT/Common/index";
import Frame4 from "@iso/assets/images/Frame4.png";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SERVICEWP>
        <Content>
          <Service></Service>
        </Content>
      </SERVICEWP>
      <OURSERVICEWP>
        <ContentOURSERVICE>
          <OurService></OurService>
        </ContentOURSERVICE>
      </OURSERVICEWP>
      <HOTJOBWP>
        <ContentHOTJOB>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px"
            }}
          >
            <ReadMore to={"/recruitment"}>View All</ReadMore>
          </div>
        </ContentHOTJOB>
      </HOTJOBWP>
      <SERVICEWP>
        <Content>
          <News></News>
        </Content>
      </SERVICEWP>
      <HIRINGCOMPANIES>
        <ContentHIRINGCOMPANIES>
          <TopHiringCompanies></TopHiringCompanies>
        </ContentHIRINGCOMPANIES>
      </HIRINGCOMPANIES>
    </>
  );
}
const ContactWithUsWP = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const ContactWithUs = styled.div`
  width: 80%;
  padding: 60px 0px 60px 0px !important;
  p {
    margin-bottom: 48px;
    color: #fffdf2;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
  }
`;
const SERVICEWP = styled.div`
  width: 100%;
`;
const BTNCONTACT = styled(ReadMore)`
  border: 1px solid #f4c70b;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: transparent;
  color: #f4c70b;
  &:hover {
    color: #fff;
  }
`;
const HOTJOBWP = styled.div`
  width: 100%;
`;
const OURSERVICEWP = styled.div`
  width: 100%;
  background: #eeeeee;
`;
const HIRINGCOMPANIES = styled.div`
  width: 100%;
  background: #eeeeee;

  display: flex;
  justify-content: center;
`;
const ContentHIRINGCOMPANIES = styled.div`
  width: 80%;
  padding: 48px 0px 48px 0px;
`;
const Content = styled.div`
  width: 80%;
  margin: 72px auto;
`;
const ContentHOTJOB = styled.div`
  width: 80%;
  margin: 72px auto;
`;
const ContentOURSERVICE = styled.div`
  width: 80%;
  margin: 72px auto;
  padding: 48px 0px 10% 0px;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;
