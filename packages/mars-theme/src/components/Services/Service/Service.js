import React from "react";
import Hero from "../../constant/HeroSection";
import Advantages from "./Advantages/Advantages";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import { styled, connect } from "frontity";

import seaFreight from "../../../assets/images/sea-freight.png";

const Service = ({ state }) => {
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <ServiceWrapper>
      <Hero title={post.title.rendered} image={post.acf.service_top_banner_background.url} />
      <Advantages post={post} />
      <Contact post={post} />
      <Services />
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled.div``;

export default connect(Service);
