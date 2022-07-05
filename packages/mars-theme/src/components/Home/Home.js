import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import Quote from "./Quote/Quote";
import { connect, css, styled } from "frontity";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Services />
      <About />
      <Quote />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  & .section {
    padding-top: 256px;
    position: relative;
  }
  @media screen and (max-width: 991px) {
    & .section {
      padding-top: 128px;
    }
  }
`;

export default connect(Home);
