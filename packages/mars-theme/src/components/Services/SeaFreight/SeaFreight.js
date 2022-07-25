import React from "react";
import Hero from "../../constant/HeroSection";
import Advantages from "./Advantages/Advantages";
import Contact from "./Contaact/Contact";
import Services from "./Services/Services";
import { styled, connect } from "frontity";

import seaFreight from "../../../assets/images/sea-freight.png";

const SeaFreight = () => {
  return (
    <SeaFreightWrapper>
      <Hero title="Sea Freight" image={seaFreight} />
      <Advantages />
      <Contact />
      <Services />
    </SeaFreightWrapper>
  );
};

const SeaFreightWrapper = styled.div``;

export default connect(SeaFreight);
