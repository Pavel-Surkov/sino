import React from "react";
import Hero from "../../constant/HeroSection";
import Advantages from "./Advantages/Advantages";
import Contact from "./Contaact/Contact";
import Services from "./Services/Services";
import { styled, connect } from "frontity";

import groundFreight from "../../../assets/images/ground-freight.png";

const GroundFreight = () => {
  return (
    <SeaFreightWrapper>
      <Hero title="Ground Freight" image={groundFreight} />
      <Advantages />
      <Contact />
      <Services />
    </SeaFreightWrapper>
  );
};

const SeaFreightWrapper = styled.div``;

export default connect(GroundFreight);
