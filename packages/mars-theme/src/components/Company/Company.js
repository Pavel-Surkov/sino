import React from "react";
import Hero from "../constant/HeroSection";
import History from "./History/History";
import Timeline from "./Timeline/Timeline";
import VisionAndMission from "./VisionAndMission/VisionAndMission";
import Organization from "./Organization/Organization";
import Directors from "./Directors/Directors";
import Subsidiaries from "./Subsidiaries/Subsidiaries";
import Responsibility from "./Responsibility/Responsibility";
import { connect, styled } from "frontity";

// import heroImg from "../../assets/images/company-about-hero.png";

const Company = ({ state, post }) => {
  return (
    <CompanyWrapper>
      <Hero
        title={post.acf.company_top_banner_title}
        image={post.acf.company_top_banner_image.url}
      />
      <History post={post} />
      <Timeline post={post} />
      <VisionAndMission post={post} />
      <Organization post={post} />
      <Directors post={post} />
      <Subsidiaries post={post} />
      <Responsibility post={post} />
    </CompanyWrapper>
  );
};

const CompanyWrapper = styled.div``;

export default connect(Company);
