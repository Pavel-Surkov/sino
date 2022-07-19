import React from "react";
import Hero from "../constant/HeroSection";
import History from "./History/History";
import Timeline from "./Timeline/Timeline";
import VisionAndMission from "./VisionAndMission/VisionAndMission";
import { connect, styled } from "frontity";

import heroImg from "../../assets/images/company-about-hero.png";

const Company = ({ state, post }) => {
  return (
    <CompanyWrapper>
      <Hero title={post.acf.company_top_banner_title} image={post.acf.company_top_banner_image.url} />
      <History post={post} />
      <Timeline post={post} />
      <VisionAndMission post={post} />
    </CompanyWrapper>
  );
};

const CompanyWrapper = styled.div``;

export default connect(Company);
