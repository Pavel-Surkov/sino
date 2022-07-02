import React from "react";
import Hero from "./Hero";
import { connect, css, styled } from "frontity";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div``;

export default connect(Home);
