import React from "react";
import Hero from "../../constant/HeroSection";
import Advantages from "./Advantages/Advantages";
import Contact from "./Contaact/Contact";
import Services from "./Services/Services";
import AirFreight from "../AirFreight/AirFreight";
import SeaFreight from "../SeaFreight/SeaFreight";
import GroundFreight from "../GroundFreight/GroundFreight";
import { styled, connect } from "frontity";

import seaFreight from "../../../assets/images/sea-freight.png";

const Service = ({ state }) => {
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log('service');
  console.log(post);
  switch (currentRoute) {
    case "/services/air-freight/":
      return <AirFreight post={post} />;
    case "/services/sea-freight/":
      return <SeaFreight post={post} />;
    case "/services/ground-freight/":
      return <GroundFreight post={post} />;
    default:
      return <PageError />;
  }
  /*return (
    <ServiceWrapper>
      <Hero title={post.title.rendered} image={seaFreight} />
      <Advantages />
      <Contact />
      <Services />
    </ServiceWrapper>
  );*/
};

const ServiceWrapper = styled.div``;

export default connect(Service);
