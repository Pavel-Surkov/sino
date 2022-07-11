import React from "react";
import Hero from "../constant/HeroSection";
import { connect, styled } from "frontity";

import heroImg from "../../assets/images/company-about-hero.png";

const Company = ({ state }) => {
  return (
    <CompanyWrapper>
      <Hero title="Our Company" image={heroImg} />
    </CompanyWrapper>
  );
};

const CompanyWrapper = styled.div``;

export default connect(Company);
