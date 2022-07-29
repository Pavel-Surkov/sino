import React from "react";
import Hero from "../constant/HeroSection";
import MediaContact from "./MediaContact/MediaContact";
import { styled } from "frontity";

import poster from "../../assets/images/job-details-poster.png";

const JobDetails = () => {
  return (
    <PageWrapper>
      <Hero image={poster} title="Job Details" />
      <MediaContact />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default JobDetails;
