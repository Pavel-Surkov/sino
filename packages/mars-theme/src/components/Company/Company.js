import React from "react";
import Hero from "../constant/HeroSection";
import History from "./History/History";
import Timeline from "./Timeline/Timeline";
import VisionAndMission from "./VisionAndMission/VisionAndMission";
import Directors from "./Directors/Directors";
import { connect, styled } from "frontity";

import heroImg from "../../assets/images/company-about-hero.png";

const Company = ({ state }) => {
  return (
    <CompanyWrapper>
      <Hero title="Our Company" image={heroImg} />
      <History />
      <Timeline />
      <VisionAndMission />
      <Directors />
    </CompanyWrapper>
  );
};

const CompanyWrapper = styled.div``;

export default connect(Company);
