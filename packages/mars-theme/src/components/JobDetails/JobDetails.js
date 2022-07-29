import React from "react";
import Hero from "../constant/HeroSection";
import MediaContact from "./MediaContact/MediaContact";
import Info from "./Info/Info";
import { styled } from "frontity";

import poster from "../../assets/images/job-details-poster.png";

const JobDetails = () => {
  return (
    <PageWrapper>
      <Hero image={poster} title="Job Details" />
      <Info />
      <MediaContact />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default JobDetails;
